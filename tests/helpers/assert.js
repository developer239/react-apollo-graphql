const config = require('../../nightwatch.conf')


module.exports = browser => ({
  equal: (element, value) => browser.assert.equal(element, value),
  uri: uri => browser.url((result) => {
    browser.assert.equal(result.value, `${config.WEB_URL}${uri}`)
  }),
  containsText: (element, text) => browser.assert.containsText(element, text),
  notContainsText: (element, text) => browser.expect.element(element).text.to.not.contain(text), // TODO: Refactor to cypres (https://github.com/cypress-io/cypress) in the future
})
