const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'bundle.js', // [id].js,[name].js,[hash].js,[hash:8].js
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'style-loader',
      },
      {
        test: /\.scss$/,
        use: 'sass-loader',
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
        use: 'css-loader',
      }
    ],
  },
  resolve: {
    alias: {
      staticJs: path.join(__dirname, '../chapter2/js'),
      'scssFile$': path.join(__dirname, '../chapter2/css/index.scss')
    }
  },
  devServer: {
    port: 3334,
    hot: true
  }
}