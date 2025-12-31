import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true
    }
};

export default nextConfig;