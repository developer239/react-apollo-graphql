const clientService = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const selectors = require('../selectors')


module.exports = {
  client: null,
  newPostId: null,

  beforeEach: (browser, done) => {
    this.client = clientService(browser)
    this.assert = assertHelper(browser)
    done()
  },

  'Required elements exist for blog list': () => {
    this.client.goToPage('/posts')
    this.client.pause(1000)
    this.assert.containsText(selectors.blog.list.header, 'All posts')
    this.client.waitForElementVisible(selectors.blog.list.buttonCreate)
  },

  'Can navigate to create new post page': () => {
    this.client.click(selectors.blog.list.buttonCreate)
  },

  'Required elements exist for blog create': () => {
    this.assert.containsText(selectors.blog.create.header, 'Create Posts')
    this.client.waitForElementVisible(selectors.blog.create.inputTitle)
    this.client.waitForElementVisible(selectors.blog.create.inputDescription)
    this.client.waitForElementVisible(selectors.blog.create.buttonSubmit)
  },

  'Can show form validation messages': () => {
    this.client.click(selectors.blog.create.buttonSubmit)
    this.client.elementsText(selectors.blog.create.elementError, (index, text) => {
      switch (index) { // eslint-disable-line
        case 0:
          this.assert.equal(text.value, 'You have to set post title')
          break
        case 1:
          this.assert.equal(text.value, 'Post text is missing')
          break
      }
    })
  },

  'Can create new post': () => {
    const postTitle = 'Test Post Title'
    const postDescription = 'Test Post Description'

    this.client
      .setValue(selectors.blog.create.inputTitle, postTitle)
      .setValue(selectors.blog.create.inputDescription, postDescription)
    this.client.click(selectors.blog.create.buttonSubmit)
    this.client.pause(2000)
    this.client.url((result) => {
      this.newPostId = result.value.split('/').pop()
      this.assert.containsText(selectors.blog.detail.title, postTitle)
      this.assert.containsText(selectors.blog.detail.description, postDescription)
    })
  },

  'New post is listed in post list': () => {
    const postTitle = 'Test Post Title'
    const postDescription = 'Test Post Description'

    this.client.goToPage('/posts')
    this.client.pause(1000)

    // TODO: Refactor
    this.client.elementsText(selectors.blog.list.postTitle, (index, text, length) => {
      if (index === length - 1) {
        this.assert.equal(text.value, postTitle)
      }
    })
    // TODO: Refactor
    this.client.elementsText(selectors.blog.list.postDescription, (index, text, length) => {
      if (index === length - 1) {
        this.assert.equal(text.value, postDescription)
      }
    })

    this.client.end()
  },
}
