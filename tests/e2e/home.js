const clientHelper = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const home = require('../selectors/home')


module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientHelper(browser)
    this.assert = assertHelper(browser)
    done()
  },

  // Home page
  'Required elements exist': () => {
    this.client.goToPage('/')
    this.assert.containsText(home.header, 'React Redux Apollo GraphQL Hot Boilerplate 2.0')
    this.client.waitForElementVisible(home.dummyImg)
  },

  'End testing home': () => {
    this.client.end()
  },
}
