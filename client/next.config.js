/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
