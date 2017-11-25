const clientService = require('../helpers/client')


module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientService(browser)
    done()
  },

  'Shows Home Page': () => {
    this.client
      .goToPage('/')
      .end()
  },
}
