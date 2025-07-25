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
  // Disable the static HTML generation for 404 pages
  generateEtags: false,
  // Disable the static HTML generation for 500 pages
  poweredByHeader: false,
  // Disable the static HTML generation for 404 pages
  reactStrictMode: true,
  // Ensure static export works with next/image
  trailingSlash: true,
  // Disable server-side rendering for all pages
  distDir: 'out',
  // Add basePath if your app is not served from the root
  // basePath: '/your-base-path',
}

export default nextConfig
