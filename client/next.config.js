/** @type {import('next').NextConfig} */

const nextConfig = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
