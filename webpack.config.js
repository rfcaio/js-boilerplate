const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

require('dotenv/config')

const parts = require('./webpack.parts')

const commonConfig = merge([
  {
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
])

const developmentConfig = merge([
  parts.devServer({ port: process.env.PORT || 8001 }),
  parts.useErrorOverlay()
])

const productionConfig = merge([])

module.exports = mode => {
  const envConfig = mode === 'development' ? developmentConfig : productionConfig
  return merge(commonConfig, envConfig, { mode })
}
