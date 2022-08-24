const headers = require('./headers')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.creativeworkspace.de' }],
      destination: 'https://creativeworkspace.de/:path*',
      permanent: true,
    },
  ],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ]
  },
  poweredByHeader: false,
  images: {
    domains: ['images.ctfassets.net', 'backend.viking.uber.space'],
    formats: ['image/avif', 'image/webp'],
  },
}
