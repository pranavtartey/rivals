/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: (process.env.ALLOWED_ORIGINS || "").split(",").filter(Boolean),
    },
  },
};

export default nextConfig;
