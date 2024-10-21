/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["backend.aggrabandhuss.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.aggrabandhuss.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
