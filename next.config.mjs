/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dhqsh-asset.decagonhq.com',
      },
    ],
  },
};

export default nextConfig;