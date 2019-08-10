const clientHelper = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const blog = require('../selectors/blog')


const newPost = {
  id: null,
  title: 'New Post Title',
  description: 'New Post Description',
}

module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientHelper(browser)
    this.assert = assertHelper(browser)
    done()
  },

  // Create post page
  'Required elements exist for post create': () => {
    this.client.goToPage('/posts/create')
    this.assert.containsText(blog.create.header, 'Create Posts')
    this.client.waitForElementVisible(blog.create.inputTitle)
    this.client.waitForElementVisible(blog.create.inputDescription)
    this.client.waitForElementVisible(blog.create.buttonSubmit)
  },

  'Can show form validation messages': () => {
    this.client.click(blog.create.buttonSubmit)
    this.client.elementsText(blog.create.elementError, (elements) => {
      this.assert.equal(elements[0].value, 'You have to set post title')
      this.assert.equal(elements[1].value, 'Post text is missing')
    })
  },

  'Can create new post': () => {
    this.client
      .setValue(blog.create.inputTitle, newPost.title)
      .setValue(blog.create.inputDescription, newPost.description)
    this.client.click(blog.create.buttonSubmit)
  },

  'Can see created post detail': () => {
    this.client.waitForElementVisible(blog.detail.title)
    this.client.waitForElementVisible(blog.detail.description)

    this.client.url((result) => {
      newPost.id = result.value.split('/').pop()
      this.assert.containsText(blog.detail.title, newPost.title)
      this.assert.containsText(blog.detail.description, newPost.description)
    })
  },

  // Lists post page
  'Required elements exist for posts list': () => {
    this.client.goToPage('/posts')
    this.client.waitForElementVisible(blog.list.header)
    this.assert.containsText(blog.list.header, 'All posts')
    this.client.waitForElementVisible(blog.list.buttonCreate)
  },

  'Can navigate to create new post page': () => {
    this.client.waitForElementVisible(blog.list.buttonCreate)
    this.client.click(blog.list.buttonCreate)
  },

  /*
  'New post is listed in post list': () => {
    // TODO: Refactor
    this.client.elementsText(blog.list.postTitle, (index, text, length) => {
      if (index === length - 1) {
        this.assert.equal(text.value, newPost.title)
      }
    })
    // TODO: Refactor
    this.client.elementsText(blog.list.postDescription, (index, text, length) => {
      if (index === length - 1) {
        this.assert.equal(text.value, newPost.description)
      }
    })
  },
  */

  'End testing blog': () => {
    this.client.end()
  },
}
