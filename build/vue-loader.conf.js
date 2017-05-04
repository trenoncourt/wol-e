var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  preloaders: {
    i18n: 'yaml-loader'
  },
  loaders: Object.assign({}, utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }), {
    i18n: '@kazupon/vue-i18n-loader'
  })
}
