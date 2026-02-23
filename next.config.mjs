const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? basePath : "",
  assetPrefix: isProd && basePath ? `${basePath}/` : "",
};

export default nextConfig;
