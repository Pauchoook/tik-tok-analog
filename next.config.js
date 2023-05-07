/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mir-s3-cdn-cf.behance.net", "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig
