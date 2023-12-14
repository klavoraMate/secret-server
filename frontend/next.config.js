/** @type {import('next').NextConfig} */
module.exports = {
    rewrites: async () => [
        {
            source: '/v1/:path*',
            destination: 'https://server-k1y7.onrender.com/v1/:path*',
        },
    ],
}
