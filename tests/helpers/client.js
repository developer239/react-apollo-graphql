/* eslint-disable */
const config = require('../../nightwatch.conf')


module.exports = function (browser, URL) {
  return {
    goToPage: function (uri) {
      browser
        .windowMaximize()
        .url(URL + uri)
      return browser
    },
  }
}
