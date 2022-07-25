const headers = require('./headers')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ]
  },
  poweredByHeader: false,
  experimental: {
    serverComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
}
