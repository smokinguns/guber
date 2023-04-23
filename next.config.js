/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output:'export',
  assetPrefix: isProd ? 'guber' : undefined,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
