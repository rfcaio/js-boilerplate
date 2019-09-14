const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

require('dotenv/config')

module.exports = {
  devServer: {
    contentBase: './dist',
    inline: true,
    port: process.env.PORT || 8001
  },
  devtool: 'inline-source-map',
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  watch: true
}
