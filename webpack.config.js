const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src/'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: [['env', { modules: false }], 'react'],
          env: {
            test: {
              presets: [['env'], 'react'],
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]__[name]__[local]--[hash:base64]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function() {
                // postcss plugins, can be exported to postcss.config.js
                return [require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // this is used to proxy ports
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOSTNAME': JSON.stringify(process.env.USER),
      'process.env.PORT': JSON.stringify(process.env.SERVER_PORT),
    }),
  ],
};
