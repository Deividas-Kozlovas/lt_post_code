let mix = require("laravel-mix");
const Dotenv = require("dotenv-webpack");

// Update webpack config to handle fallbacks for missing core modules
mix.webpackConfig({
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify"),
      crypto: require.resolve("crypto-browserify"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [new Dotenv()],
});

// Compile your JavaScript and Sass files
mix
  .js("src/app.js", "public/js")
  .sass("src/scss/style.scss", "public/css")
  .setPublicPath("public");
