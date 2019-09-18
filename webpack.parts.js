
exports.devServer = (options = {}) => ({
  devServer: Object.assign({ stats: 'errors-only' }, options)
})
