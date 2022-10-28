/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com'
      's3.us-'
    ]
  }
}

module.exports = nextConfig
