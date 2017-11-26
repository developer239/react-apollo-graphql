const config = require('../../nightwatch.conf')
const clientHelper = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const blog = require('../selectors/blog')


const newPost = {
  id: null,
  title: 'New Post Title',
  description: 'New Post Description',
}

const editedPost = {
  title: 'New Post Title [edited]',
  description: 'New Post Description [edited]',
}

module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientHelper(browser)
    this.assert = assertHelper(browser)
    done()
  },

  // Create post
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

  // Edit post
  'Required elements exist for post edit': () => {
    this.client.click(blog.detail.buttonEdit) // navigate using the edit post button
    this.client.waitForElementVisible(blog.create.header)
    this.assert.containsText(blog.create.header, 'Update Posts')
    this.client.waitForElementVisible(blog.create.inputTitle)
    this.client.waitForElementVisible(blog.create.inputDescription)
    this.client.waitForElementVisible(blog.create.buttonSubmit)
  },

  'Can edit existing post': () => {
    this.client.pause(500)
    this.client
      .clearValue(blog.create.inputTitle)
      .clearValue(blog.create.inputDescription)
      .setValue(blog.create.inputTitle, editedPost.title)
      .setValue(blog.create.inputDescription, editedPost.description)
    this.client.click(blog.create.buttonSubmit)
    this.client.pause(1000)
    // TODO: Find out why is post detail not being updated
    // this.assert.containsText(blog.detail.title, editedPost.title)
    // this.assert.containsText(blog.detail.description, editedPost.description)
  },

  // List posts
  'Required elements exist for posts list': () => {
    this.client.goToPage('/posts')
    this.client.waitForElementVisible(blog.list.header)
    this.assert.containsText(blog.list.header, 'All posts')
    this.client.waitForElementVisible(blog.list.buttonCreate)
  },

  'New (edited) post is listed in post list': () => {
    this.assert.containsText(blog.list.post.title, editedPost.title)
    this.assert.containsText(blog.list.post.description, editedPost.description)
  },

  // Delete post
  'Can go to post detail from post list': () => {
    this.client.click(blog.list.post.button)
  },

  'Can delete post from post detail': () => {
    this.client.waitForElementVisible(blog.detail.buttonDelete)
    this.client.click(blog.detail.buttonDelete)
    this.client.pause(1500)
    this.client.url((result) => {
      this.assert.equal(result.value, `${config.WEB_URL}/posts`)
      this.assert.notContainsText(blog.list.post.title, newPost.title)
      this.assert.notContainsText(blog.list.post.description, newPost.description)
    })
  },

  'End testing blog': () => {
    this.client.end()
  },
}
