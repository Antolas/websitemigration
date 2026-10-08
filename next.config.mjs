/** @type {import('next').NextConfig} */
// Set NEXT_PUBLIC_BASE_PATH (e.g. "/websitemigration") to serve the site from a sub-path such as GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  basePath,
  // Fully static site: `next build` writes plain HTML/CSS/JS to ./out
  output: 'export',
  trailingSlash: false,
  images: { loader: 'custom', loaderFile: './src/lib/image-loader.ts' },
  reactStrictMode: true,
};

export default nextConfig;
