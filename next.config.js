const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPreact = require("next-plugin-preact");
const { withPlausibleProxy: wpp } = require("next-plausible");
const withPlausibleProxy = wpp();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pbs.twimg.com"],
  },
  i18n: {
    locales: ["__default", "en", "ja"],
    defaultLocale: "__default",
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: "/work/pokemon-font",
        destination: "/work/johto-mono",
        permanent: true,
      },
    ];
  },
  sentry: {
    hideSourceMaps: true,
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer, withPreact, withPlausibleProxy],
  nextConfig
);
