import headers from './headers.mjs'

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    token: 'zLbKvsPdr_BJKh7DDtkisEroJk6nSZoX',
  },
  publicRuntimeConfig: {
    url: 'https://backend.viking.uber.space',
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
    domains: ['images.ctfassets.net', 'backend.viking.uber.space'],
    formats: ['image/avif', 'image/webp'],
  },
}

export default config
