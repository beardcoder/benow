/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'api.letsbenow.de'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
