const createNextIntlPlugin = require('next-intl/plugin');

// Point the plugin at our request config (we keep source under src/).
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Trailing slashes off (Next default) keeps canonical URLs clean and matches
  // the existing indexed URLs (no trailing slash).
  trailingSlash: false,
  // The ported CRA components don't follow eslint-config-next conventions
  // (e.g. <img> vs next/image); don't block production builds on lint.
  eslint: { ignoreDuringBuilds: true },
};

module.exports = withNextIntl(nextConfig);
