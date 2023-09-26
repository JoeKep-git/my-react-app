/** @type {import('next').NextConfig} */
module.exports = { 
  images: {
    domains: ['localhost'],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: 'http://localhost:8000/api/:path'
      }
    ]
  }
}

