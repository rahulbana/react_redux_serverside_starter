const webpack = require("webpack");
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const loaders = require('./loader');
const root = process.cwd();

const browserConfig = {
  entry: path.join(root, "./app/client/index.js"),
  output: {
    path: root,
    filename: "./dist/bundle.js"
  },
  module: {
    rules: [].concat(loaders.clientloaders)
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: ['jsx', '.json', '.js'],
    modules: [
      path.resolve(root, './app'),
      'node_modules',
    ]
  }
};

const serverConfig = {
  entry: path.join(root, "./app/server/index.js"),
  target: "node",
  output: {
    path: root,
    filename: "./dist/server.js",
    libraryTarget: "commonjs2"
  },
  externals: [nodeExternals()],
  module: {
    rules: [].concat(loaders.serverloaders)
  },
  plugins: [],
  resolve: {
    extensions: ['jsx', '.json', '.js'],
    modules: [
      path.resolve(root, './app'),
      'node_modules',
    ]
  }
};

module.exports = [browserConfig, serverConfig];
