/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3-alpha-sig.figma.com',
          },
          {
            protocol: 'https',
            hostname: 'prnt.sc',
          },
        ],
      },
}

module.exports = nextConfig
