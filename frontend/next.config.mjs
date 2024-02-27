// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  async redirects() {
    /**
     * Temporaly redirection to ERC-4643 Research from root.
     * TODO: Create Index/Root path pages to manage sub-path researches
     */
    return [
      {
        source: "/",
        destination: "/erc3643",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
