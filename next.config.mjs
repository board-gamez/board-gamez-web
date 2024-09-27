/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "board-gamez.s3.ir-thr-at1.arvanstorage.ir",
      },
    ],
  },
};

export default nextConfig;
