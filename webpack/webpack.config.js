const webpack = require("webpack");
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const loaders = require('./loader');

const port = process.env.SERVER_PORT
const root = process.cwd();

const browserConfig = {
  entry: path.join(root, "./app/client/index.js"),
  output: {
    path: root,
    filename: "./dist/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [].concat(loaders.clientloaders)
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackShellPlugin({
      onBuildStart: ['echo "start client"'],
      onBuildEnd: ['echo "end client"']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.BannerPlugin({
      banner: "__isBrowser__ = true;",
      raw: true,
      include: /\.js$/
    }),
    new styleLintPlugin({
      failOnError: false,
      context: path.join(root, 'app'),
      files: ['**/*.scss'],
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
  devtool: "cheap-module-source-map",
  module: {
    rules: [].concat(loaders.serverloaders)
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting server"'],
      onBuildEnd: ['npm run nodemon']
    }),
    new webpack.BannerPlugin({
      banner: "__isBrowser__ = false;",
      raw: true,
      include: /\.js$/
    }),
    new styleLintPlugin({
      failOnError: false,
      context: path.join(root, 'app'),
      files: ['**/*.scss'],
    }),
    new OpenBrowserPlugin({ url: `http://localhost:${port}` })
  ],
  resolve: {
    extensions: ['jsx', '.json', '.js'],
    modules: [
      path.resolve(root, './app'),
      'node_modules',
    ]
  }
};

module.exports = [browserConfig, serverConfig];
