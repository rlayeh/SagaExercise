require("dotenv").config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve('dist');
var APP_DIR = path.resolve("src/main.js");

module.exports = {
  entry: {
    app: APP_DIR,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
    }),
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
      "BACKEND_API",
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ]
      }
    ],
  },
};
