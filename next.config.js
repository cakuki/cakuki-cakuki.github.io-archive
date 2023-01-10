const nextra = require("nextra");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

/**
 * @type {nextra.NextraConfig}
 */
const nextraConfig = {
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
};

module.exports = nextra(nextraConfig)(nextConfig);
