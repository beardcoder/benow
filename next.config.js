const headers = require('./headers')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ]
  },
  generateEtags: false,
  poweredByHeader: false,
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
}
