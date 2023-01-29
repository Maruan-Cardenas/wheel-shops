const nextConfig = {
  reactStrictMode: true,
  webpack (config, { isServer }) {
    config.module.rules.push({
      parser: {
        amd: false
      }
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }
    ]
  }
}

module.exports = nextConfig
