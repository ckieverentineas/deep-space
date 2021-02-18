const DEV = process.env.NODE_ENV !== 'production'

async function rewrites() {
  if (!DEV) {
    return []
  }

  return [
    {
      source: '/api/:path*',
      destination: 'http://localhost:8080/api/:path*',
    },
  ]
}

module.exports = {
  rewrites,
}
