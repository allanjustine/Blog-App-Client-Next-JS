import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment and customize headers if needed
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' http://136.239.196.178:5004; frame-src 'none'; base-uri 'self'; form-action 'self';",
  //         },
  //       ],
  //     },
  //   ];
  // },

  eslint: {
    ignoreDuringBuilds: true, // Ignores all ESLint warnings/errors during the build
  },
};

export default nextConfig;
