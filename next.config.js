const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: !!process.env.ANALYZE });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {},
  modularizeImports: {
    "react-bootstrap": { transform: "react-bootstrap/{{member}}" },
  },
  webpack: (config, { dev, isServer }) => {
    // set up preact in production
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat", // Must be below test-utils
        "react/jsx-runtime": "preact/jsx-runtime",
      });
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
