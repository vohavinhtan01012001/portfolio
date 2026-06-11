import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  watchOptions: {
    ignored: ["**/.playwright-mcp/**", "**/node_modules/**"],
  },
};

export default nextConfig;
