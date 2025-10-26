-- Users and Sessions Tables
-- Purpose: User management and session tracking for future authentication
-- Dependencies: 001_audit_logs.sql (for user_role enum)

-- =============================================================================
-- USERS TABLE
-- =============================================================================

CREATE TABLE users (
  -- Primary key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Identity
  email TEXT UNIQUE NOT NULL,
  badge_number TEXT UNIQUE,
  full_name TEXT NOT NULL,

  -- Role & Department
  role user_role NOT NULL DEFAULT 'paramedic',
  station_id TEXT,
  department TEXT NOT NULL DEFAULT 'lacfd',

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,

  -- Soft delete (preserve audit trail)
  deleted_at TIMESTAMPTZ,

  -- Constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_badge_number CHECK (badge_number IS NULL OR length(badge_number) >= 3)
);

-- Indexes for common query patterns
CREATE INDEX idx_users_email ON users(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_badge_number ON users(badge_number) WHERE badge_number IS NOT NULL AND deleted_at IS NULL;
CREATE INDEX idx_users_station_id ON users(station_id) WHERE station_id IS NOT NULL;
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_department ON users(department);
CREATE INDEX idx_users_deleted ON users(deleted_at) WHERE deleted_at IS NOT NULL;

-- Table comment
COMMENT ON TABLE users IS 'User accounts for LA County Fire paramedics and staff';
COMMENT ON COLUMN users.id IS 'Unique user identifier (UUID v4)';
COMMENT ON COLUMN users.email IS 'User email address (primary identifier)';
COMMENT ON COLUMN users.badge_number IS 'LA County Fire badge number (optional)';
COMMENT ON COLUMN users.role IS 'User role (paramedic | emt | medical_director | admin | guest)';
COMMENT ON COLUMN users.station_id IS 'Fire station assignment (e.g., "71", "45", "BC5")';
COMMENT ON COLUMN users.deleted_at IS 'Soft delete timestamp (preserve audit trail)';

-- =============================================================================
-- SESSIONS TABLE
-- =============================================================================

CREATE TABLE sessions (
  -- Primary key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Foreign key to users
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Session identification
  fingerprint TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  last_activity TIMESTAMPTZ DEFAULT NOW(),

  -- Additional metadata
  metadata JSONB,

  -- Constraints
  CONSTRAINT valid_expiration CHECK (expires_at > created_at)
);

-- Indexes for session management
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at);
CREATE INDEX idx_sessions_fingerprint ON sessions(fingerprint);
CREATE INDEX idx_sessions_user_active ON sessions(user_id, last_activity DESC) WHERE expires_at > NOW();

-- Table comment
COMMENT ON TABLE sessions IS 'Active user sessions for multi-device support';
COMMENT ON COLUMN sessions.fingerprint IS 'Device fingerprint (SHA256 hash of IP + User-Agent + headers)';
COMMENT ON COLUMN sessions.expires_at IS 'Session expiration timestamp (default: 60 minutes)';
COMMENT ON COLUMN sessions.last_activity IS 'Last activity timestamp (updated on each request)';

-- =============================================================================
-- TRIGGERS
-- =============================================================================

-- Auto-update updated_at timestamp on users table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Auto-cleanup expired sessions
CREATE OR REPLACE FUNCTION cleanup_expired_sessions()
RETURNS TRIGGER AS $$
BEGIN
  -- Delete expired sessions (older than 1 hour past expiration)
  DELETE FROM sessions
  WHERE expires_at < NOW() - INTERVAL '1 hour';

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_cleanup_sessions
  AFTER INSERT ON sessions
  EXECUTE FUNCTION cleanup_expired_sessions();

-- =============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================================================

-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own data
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  USING (auth.uid() = id OR deleted_at IS NULL);

-- Policy: Admins can read all users
CREATE POLICY "Admins can read all users"
  ON users FOR SELECT
  USING (
    (SELECT role FROM users WHERE id = auth.uid()) IN ('admin', 'medical_director')
  );

-- Policy: Admins can insert users
CREATE POLICY "Admins can insert users"
  ON users FOR INSERT
  WITH CHECK (
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
  );

-- Policy: Admins can update users
CREATE POLICY "Admins can update users"
  ON users FOR UPDATE
  USING (
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
  );

-- Policy: Admins can soft-delete users (set deleted_at)
CREATE POLICY "Admins can soft delete users"
  ON users FOR UPDATE
  USING (
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
    AND NEW.deleted_at IS NOT NULL
  );

-- Enable RLS on sessions table
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own sessions
CREATE POLICY "Users can read own sessions"
  ON sessions FOR SELECT
  USING (user_id = auth.uid());

-- Policy: Users can create their own sessions
CREATE POLICY "Users can create own sessions"
  ON sessions FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Policy: Users can update their own sessions
CREATE POLICY "Users can update own sessions"
  ON sessions FOR UPDATE
  USING (user_id = auth.uid());

-- Policy: Users can delete their own sessions
CREATE POLICY "Users can delete own sessions"
  ON sessions FOR DELETE
  USING (user_id = auth.uid());

-- =============================================================================
-- HELPER FUNCTIONS
-- =============================================================================

-- Get active sessions for a user
CREATE OR REPLACE FUNCTION get_user_sessions(p_user_id UUID)
RETURNS TABLE (
  session_id UUID,
  fingerprint TEXT,
  ip_address INET,
  created_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  last_activity TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    id,
    s.fingerprint,
    s.ip_address,
    s.created_at,
    s.expires_at,
    s.last_activity
  FROM sessions s
  WHERE s.user_id = p_user_id
    AND s.expires_at > NOW()
  ORDER BY s.last_activity DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_user_sessions IS 'Get all active sessions for a user';

-- Get user by email
CREATE OR REPLACE FUNCTION get_user_by_email(p_email TEXT)
RETURNS TABLE (
  user_id UUID,
  email TEXT,
  badge_number TEXT,
  full_name TEXT,
  role user_role,
  station_id TEXT,
  last_login TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    id,
    u.email,
    u.badge_number,
    u.full_name,
    u.role,
    u.station_id,
    u.last_login
  FROM users u
  WHERE u.email = p_email
    AND u.deleted_at IS NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_user_by_email IS 'Get user by email address (active users only)';

-- Get user by badge number
CREATE OR REPLACE FUNCTION get_user_by_badge(p_badge_number TEXT)
RETURNS TABLE (
  user_id UUID,
  email TEXT,
  badge_number TEXT,
  full_name TEXT,
  role user_role,
  station_id TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    id,
    u.email,
    u.badge_number,
    u.full_name,
    u.role,
    u.station_id
  FROM users u
  WHERE u.badge_number = p_badge_number
    AND u.deleted_at IS NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_user_by_badge IS 'Get user by LA County Fire badge number';

-- Update last login timestamp
CREATE OR REPLACE FUNCTION update_last_login(p_user_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE users
  SET last_login = NOW()
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION update_last_login IS 'Update user last_login timestamp';

-- Get users by station
CREATE OR REPLACE FUNCTION get_station_users(p_station_id TEXT)
RETURNS TABLE (
  user_id UUID,
  email TEXT,
  badge_number TEXT,
  full_name TEXT,
  role user_role
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    id,
    u.email,
    u.badge_number,
    u.full_name,
    u.role
  FROM users u
  WHERE u.station_id = p_station_id
    AND u.deleted_at IS NULL
  ORDER BY u.full_name;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_station_users IS 'Get all users assigned to a fire station';

-- =============================================================================
-- SEED DATA (Optional - for testing)
-- =============================================================================

-- Insert test admin user (REMOVE IN PRODUCTION)
-- INSERT INTO users (email, badge_number, full_name, role, station_id, department)
-- VALUES (
--   'admin@fire.lacounty.gov',
--   'ADMIN001',
--   'System Administrator',
--   'admin',
--   'HQ',
--   'lacfd'
-- );

-- Insert test paramedic user (REMOVE IN PRODUCTION)
-- INSERT INTO users (email, badge_number, full_name, role, station_id, department)
-- VALUES (
--   'test.paramedic@fire.lacounty.gov',
--   'PM1234',
--   'Test Paramedic',
--   'paramedic',
--   '71',
--   'lacfd'
-- );
