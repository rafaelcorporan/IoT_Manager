/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if your app is not served from the root
  // basePath: '/your-base-path',
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
}

export default nextConfig
