const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      assert: require.resolve("assert/"),
      util: require.resolve("util/"),
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      return webpackConfig;
    },
  },
};
