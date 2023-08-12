/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    domains: ['images.ctfassets.net', 'api.letsbenow.de'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
