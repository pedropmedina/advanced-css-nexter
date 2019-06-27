const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({ mode }) =>
  console.log({ mode }) || {
    devtool: 'hidden-source-map',
    optimization: {
      minimizer: [new TerserPlugin()]
    }
  };
