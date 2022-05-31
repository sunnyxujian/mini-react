const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: "production",
  entry: resolve("src/index.js"),
  devtool: false,
  output: {
    path: resolve("dist"),
    filename: "index.js",
  },
  devServer: {
    static: resolve("public"),
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
  ],
};
