const path = require('path');

module.exports = ({ mode }) =>
  console.log({ mode }) || {
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, '..', 'build'),
      hot: true,
      port: 3000,
      historyApiFallback: true
    }
  };
