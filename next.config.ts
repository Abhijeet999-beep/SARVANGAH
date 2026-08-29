import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || process.env.BACKEND_URL || "http://localhost:5000";
    return [
      {
        source: "/api/consultations/:path*",
        destination: `${backendUrl}/api/consultations/:path*`,
      },
      {
        source: "/api/consultations",
        destination: `${backendUrl}/api/consultations`,
      },
      {
        source: "/api/health",
        destination: `${backendUrl}/api/health`,
      },
    ];
  },
};

export default nextConfig;
