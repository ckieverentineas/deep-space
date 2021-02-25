const DEV = process.env.NODE_ENV !== 'production'

async function rewrites() {
  if (!DEV) {
    return []
  }

  return [
    {
      source: '/graphql/:path*',
      destination: 'http://localhost:8080/graphql/:path*',
    },
  ]
}

module.exports = {
  rewrites,
}
