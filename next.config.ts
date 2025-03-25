// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://app.swaggerhub.com/apis/ADMIN_186/Frontend/1.0.0/:path*",
//       },
//     ];
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://testcandidate.linkedinindonesia.com/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
