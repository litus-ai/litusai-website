/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: (process.env.GITHUB_ACTIONS ? 'export' : 'standalone')
};

module.exports = nextConfig;
