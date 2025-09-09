/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/', destination: '/portokali.html', permanent: false },
    ]
  },
}
module.exports = nextConfig
