const ErrorOverlayWebpackPlugin = require('error-overlay-webpack-plugin')

exports.devServer = (options = {}) => ({
  devServer: Object.assign({ stats: 'errors-only' }, options)
})

exports.useErrorOverlay = () => ({
  plugins: [new ErrorOverlayWebpackPlugin()]
})
