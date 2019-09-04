const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const webpack = require("webpack");
module.exports = merge(commonConfig, {
  mode: "development",
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: "0.0.0.0",
    port: 8899,
    hot: true,
    open: true,
    overlay: { errors: true }
  },
  devtool: "inline-source-map"
});
