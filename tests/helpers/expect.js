module.exports = browser => ({
  toBeVisible: element => browser.expect.element(element).to.be.visible,
})
