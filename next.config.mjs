/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/mzlspj-demo" : "",
  assetPrefix: isProd ? "/mzlspj-demo/" : "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
