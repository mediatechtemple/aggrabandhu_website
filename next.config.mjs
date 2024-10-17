/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.aggrabandhuss.org",
        pathname: "/**", // This allows all images from this domain
      },
    ],
  },
};

export default nextConfig;
