/** @type {import('next').NextConfig} */
const nextConfig = {  
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd14g6kounxs3ku.cloudfront.net',
      },
    ],
  }

};

export default nextConfig;