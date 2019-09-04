const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:4].css"
    })
    // new webpack.DllReferencePlugin({
    //   manifest: path.join(__dirname, "../dll", "lib.manifest.json") //dll plugin manifest file
    // })
  ]
});
