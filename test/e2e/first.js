const clientService = require('../helpers/client')


module.exports = {
  client: null,

  beforeEach: function (browser, done) {
    this.client = clientService(browser)
    done()
  },

  'Go to home page': function () {
    this.client.goToPage('/')
  },
}
