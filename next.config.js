/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/studio/:path*",
      destination:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3333/studio/:path*"
          : "/studio/index.html",
    },
  ],
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
