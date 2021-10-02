const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // Error logs individual file errors, rather than from bundled js
  devtool: 'inline-source-map',
  // Tells webpack-dev-server where to watch for files
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
  // Can define multiple output bundles by passing an object, defining multiple entry points
  // Each key-name will map to an output bundle file-name.
  // The key-value refers to the path to the entry file
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Dynamically create output bundles where each bundle name represents one key from the entry object
    filename: '[name].bundle.js',
    clean: true,
  },
  // - Modules/loaders define some amount of preprocessing to run on files before including them in our output bundles
  // - We define at a minimum two properties for each loader rule:
  // -- the test property identifies which file or files should be transformed
  // -- the use property identifies which loader should be used to do the transforming
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/, //handles sass
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader', //for bootstrap
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // Creates an html file to inject our output bundles into
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
