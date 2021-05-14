const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // bundles into single file
  mode: "development",

  // entry file
  entry: "./build/index.js",

  // puts output main.js into dist folder
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },

  // loaders
  module: {
    rules: [],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "pwa-src", to: "./" },
        { from: "photos", to: "./photos" },
      ],
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    watchContentBase: true,
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      Content: path.resolve(__dirname, "./src/Content/"),
    },
  },
};
