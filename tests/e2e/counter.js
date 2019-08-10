const clientHelper = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const counter = require('../selectors/counter')


module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientHelper(browser)
    this.assert = assertHelper(browser)
    done()
  },

  // Counter page
  'Required elements exist': () => {
    this.client.goToPage('/counter')
    this.assert.containsText(counter.header, 'Redux Counter')
    this.client.waitForElementVisible(counter.value)
    this.client.waitForElementVisible(counter.buttonIncrement)
    this.client.waitForElementVisible(counter.buttonDecrement)
  },

  'Can increment value': () => {
    this.assert.containsText(counter.value, '0')
    this.client.click(counter.buttonIncrement)
    this.assert.containsText(counter.value, '1')
    this.client.click(counter.buttonIncrement)
    this.assert.containsText(counter.value, '2')
  },

  'Can decrement value': () => {
    this.assert.containsText(counter.value, '2')
    this.client.click(counter.buttonDecrement)
    this.assert.containsText(counter.value, '1')
    this.client.click(counter.buttonDecrement)
    this.assert.containsText(counter.value, '0')
  },

  'End testing counter': () => {
    this.client.end()
  },
}
