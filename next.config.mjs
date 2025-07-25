// @ts-check

// Create a simple image loader using ESM
const fs = await import('fs/promises');
const path = await import('path');

// Check if image-loader.js exists, if not create it
const imageLoaderPath = path.join(process.cwd(), 'image-loader.js');

try {
  await fs.access(imageLoaderPath);
} catch (error) {
  await fs.writeFile(
    imageLoaderPath,
    'export default () => ({\n  // Return the same URL for all images\n  src: (src) => src,\n  width: "100%",\n  quality: 75,\n});'
  );
}

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
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
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
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  
  // Base path if your app is not served from root
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
