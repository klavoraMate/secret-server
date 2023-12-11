/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://server-k1y7.onrender.com/api/:path*',
      },
    ]
  },
}
