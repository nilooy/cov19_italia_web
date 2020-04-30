const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
});
