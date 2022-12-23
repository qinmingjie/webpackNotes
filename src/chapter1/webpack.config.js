const path = require('path');
// 将css构建为单独的css文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // 定义打包入口文件
  entry: path.join(__dirname, './main.js'),
  // 定义打包完成后输出路径及文件名
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `main.css`
    })
  ],
  devServer: {
    port: 3334,
    hot: true
  }
}