/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["clipit-video-bucket.s3.eu-north-1.amazonaws.com"],
  },
};

export default nextConfig;
