/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // to read and disply images from external sources like pexels
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };
  
  module.exports = nextConfig;