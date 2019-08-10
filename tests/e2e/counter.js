const clientHelper = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const selectors = require('../selectors')


module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientHelper(browser)
    this.assert = assertHelper(browser)
    done()
  },

  'Required elements exist': () => {
    this.client.goToPage('/counter')
    this.assert.containsText(selectors.counter.header, 'Redux Counter')
    this.client.waitForElementVisible(selectors.counter.value)
    this.client.waitForElementVisible(selectors.counter.buttonIncrement)
    this.client.waitForElementVisible(selectors.counter.buttonDecrement)
  },

  'Can increment value': () => {
    this.client.goToPage('/counter')
    this.assert.containsText(selectors.counter.value, '0')
    this.client.click(selectors.counter.buttonIncrement)
    this.assert.containsText(selectors.counter.value, '1')
    this.client.click(selectors.counter.buttonIncrement)
    this.assert.containsText(selectors.counter.value, '2')
  },

  'Can decrement value': () => {
    this.client.goToPage('/counter')
    this.assert.containsText(selectors.counter.value, '0')
    this.client.click(selectors.counter.buttonDecrement)
    this.assert.containsText(selectors.counter.value, '-1')
    this.client.click(selectors.counter.buttonDecrement)
    this.assert.containsText(selectors.counter.value, '-2')
    this.client.end()
  },
}
