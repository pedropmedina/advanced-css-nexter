const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');

const loadEnv = env => require(`./build-utils/webpack.${env.mode}`)(env);

module.exports = (env = { mode: 'production', presets: [] }) => {
  return merge(
    {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js',
        publicPath: '/'
      },
      mode: env.mode,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: { loader: 'babel-loader' },
            include: path.resolve(__dirname, 'src')
          },
          {
            test: /\.html$/,
            use: { loader: 'html-loader' }
          },
          {
            test: /\.(jpe?g|png|svg|gif)$/,
            use: { loader: 'file-loader' }
          }
        ]
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HTMLPlugin({
          template: './public/index.html',
          favicon: './src/assets/favicon.png'
        }),
        new CleanPlugin()
      ]
    },
    loadEnv(env)
  );
};
