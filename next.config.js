/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["utfs.io"], // add your own domain here if you want to use it in the project
  },
};

module.exports = nextConfig;
