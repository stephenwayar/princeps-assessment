/** @type {import('next').NextConfig} */

const nextConfig = {
  // Environment variables for the app.
  env: {
    API_URL: process.env.API_URL,
    BEARER_TOKEN: process.env.BEARER_TOKEN,
  },
};

export default nextConfig;