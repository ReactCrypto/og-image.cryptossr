/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "avatars.githubusercontent.com"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: {
    dirs: ["pages", "components"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
