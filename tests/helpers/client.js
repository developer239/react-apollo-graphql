const config = require('../../nightwatch.conf')


module.exports = browser => ({

  goToPage: uri => browser
    .windowMaximize()
    .url(config.WEB_URL + uri)
    .waitForElementVisible('body', 3000),

  waitForElementVisible: (element, timeout) => browser.waitForElementVisible(element, timeout),

  click: element => browser.click(element),

  setValue: (element, value) => browser.setValue(element, value),

  clearValue: element => browser.clearValue(element),

  end: () => browser.end(),

  pause: timeout => browser.pause(timeout),

  url: (url, callback) => browser.url(url, (result) => {
    callback(result)
  }),

  elementsText: (element, callback) => {
    const values = []
    browser.perform((client, done) => {
      browser.elements('css selector', element, (result) => {
        result.value.forEach((el, index) => {
          browser.elementIdText(el.ELEMENT, (text) => {
            values.push(text)
            if (index === result.value.length - 1) {
              callback(values)
              done()
            }
          })
        })
      })
    })
  },
})
