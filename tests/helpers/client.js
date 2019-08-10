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

  // TODO: Refactor
  elementsText: (element, callback) => {
    browser.elements('css selector', element, (result) => {
      const els = result.value
      els.forEach((el, index) => {
        browser.elementIdText(el.ELEMENT, (text) => {
          callback(index, text, els.length) // TODO: Refactor
        })
      })
    })
  },
})
