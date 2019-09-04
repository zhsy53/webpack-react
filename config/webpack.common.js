const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "index.html",
      hash: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "../src"),
        loader: "babel-loader"
      }
      // {
      //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         limit: 3000
      //       }
      //     }
      //   ]
      // }

      // {
      //   test: require.resolve("jquery"),
      //   use: [
      //     {
      //       loader: "expose-loader",
      //       options: "jQuery"
      //     },
      //     {
      //       loader: "expose-loader",
      //       options: "$"
      //     }
      //   ]
      // }
      // {
      //   test: /\.scss$/,
      //   loaders: ["sass"]
      // }
    ]
    // TODO
    // noParse: content => /node_modules/.test(content)
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          minSize: 0,
          minChunks: 1,
          enforce: true,
          name: "lib"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: false
  }
};
