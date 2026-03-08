const isProd = process.env.NODE_ENV === "production";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? normalizedBasePath : "",
  assetPrefix: isProd && normalizedBasePath ? `${normalizedBasePath}/` : "",
};

export default nextConfig;
