import bundleAnalyzer from '@next/bundle-analyzer'

import headers from './headers.mjs'

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    token: 'IrF9fmPzva1RCQg-dAC8zUlUygTzuGep',
  },
  publicRuntimeConfig: {
    url: 'https://api.letsbenow.de',
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.creativeworkspace.de' }],
      destination: 'https://letsbenow.de/:path*',
      permanent: true,
    },
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'creativeworkspace.de' }],
      destination: 'https://letsbenow.de/:path*',
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
    domains: ['images.ctfassets.net', 'api.letsbenow.de'],
    formats: ['image/avif', 'image/webp'],
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(config)
