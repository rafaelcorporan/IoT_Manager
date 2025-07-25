/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Disable build-time warnings/errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static exports
  },
  
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Required for static exports
  trailingSlash: true,
  
  // Output directory for static export
  distDir: 'out',
  
  // Disable image optimization API
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  
  // Disable image optimization
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  
  // Base path if your app is not served from root
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

// Create a simple image loader
const fs = require('fs')
if (!fs.existsSync('./image-loader.js')) {
  fs.writeFileSync(
    './image-loader.js',
    'module.exports = () => ({\n  // Return the same URL for all images\n  src: (src) => src,\n  width: "100%",\n  quality: 75,\n})'
  )
}

export default nextConfig
