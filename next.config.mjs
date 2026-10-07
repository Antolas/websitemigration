/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to ./out
  output: 'export',
  trailingSlash: false,
  images: { loader: 'custom', loaderFile: './src/lib/image-loader.ts' },
  reactStrictMode: true,
};

export default nextConfig;
