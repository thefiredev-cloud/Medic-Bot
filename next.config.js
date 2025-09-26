const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingExcludes: {
      "*": ["**/PDFs/**", "**/scripts/**"]
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "connect-src 'self' https://api.openai.com",
              "font-src 'self' data:",
              "frame-ancestors 'none'"
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

