/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com', 'img.icons8.com'],
  },
  rewrites: async () => [
    {
      source: '/api/v1/:path*',
      destination: 'http://localhost:4000/:path*',
    },
  ],
}

module.exports = nextConfig
