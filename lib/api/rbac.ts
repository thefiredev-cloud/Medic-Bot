import type { NextRequest } from "next/server";

type PermissionResult =
  | { ok: true }
  | { ok: false; error: Response };

/**
 * RBAC permission check middleware stub for testing.
 * In production, this would verify JWT claims against role permissions.
 *
 * ⚠️ CRITICAL SECURITY ISSUE - PRODUCTION BLOCKER ⚠️
 * TODO(WEEK2-AUTH): Implement real RBAC authentication
 *
 * This stub currently returns { ok: true } for ALL requests in non-test environments.
 * This is a MAJOR SECURITY VULNERABILITY that allows unauthorized access to protected routes.
 *
 * Required implementation (Week 2):
 * 1. Extract JWT from Authorization header (Bearer token)
 * 2. Verify JWT signature using public key/secret from environment
 * 3. Parse JWT claims to extract user role (paramedic, emt, admin, etc.)
 * 4. Check if user's role has the required permission
 * 5. Return { ok: false, error: Response } with 401/403 status if unauthorized
 * 6. Implement token expiry and refresh logic
 * 7. Add audit logging for failed auth attempts
 *
 * Environment variables needed:
 * - JWT_SECRET or JWT_PUBLIC_KEY
 * - JWT_EXPIRY (default: 1h)
 *
 * Example JWT payload:
 * {
 *   sub: "user-id-123",
 *   role: "paramedic",
 *   permissions: ["chat:read", "chat:write", "audit:read"],
 *   exp: 1234567890
 * }
 */
export async function requirePermission(
  req: NextRequest,
  permission: string
): Promise<PermissionResult> {
  // In test environment, allow all permissions
  if (process.env.NODE_ENV === "test") {
    return { ok: true };
  }

  // ⚠️ SECURITY WARNING: This allows ALL requests in production
  // This is intentionally left as a stub for Week 1 demo/pitch purposes only
  // DO NOT deploy to production without implementing real authentication

  // Parameters intentionally unused in stub - will be used for JWT verification in production
  void req;
  void permission;

  console.warn(
    '[SECURITY] RBAC stub called - all requests allowed. ' +
    'Implement JWT authentication before production deployment.'
  );

  return { ok: true };
}
