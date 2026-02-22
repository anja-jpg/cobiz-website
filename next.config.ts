import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/stuurcijfers',
        destination: '/workshop-stuurcijfers',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
