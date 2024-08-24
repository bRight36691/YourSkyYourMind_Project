/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  transpilePackages: ["geist"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "d2sgmru1qxbmfj.cloudfront.net",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/img/:path*",
        destination: "https://d2sgmru1qxbmfj.cloudfront.net/img/:path*",
        permanent: true,
      },
      {
        source: "/sound/:path*",
        destination: "https://d2sgmru1qxbmfj.cloudfront.net/sound/:path*",
        permanent: true,
      },
    ];
  },
};

export default config;
