module.exports = {
  list: {
    header: 'h1',
    buttonCreate: '#createNewPost',
    post: {
      title: '#posts > div:last-child > h3',
      description: '#posts > div:last-child > p',
      button: '#posts > div:last-child > a > button',
    },
  },
  create: {
    header: 'h1',
    inputTitle: 'input[placeholder=Title]',
    inputDescription: 'textarea[placeholder=Description]',
    buttonSubmit: 'button[type=submit]',
    elementError: '.help-block',
  },
  detail: {
    title: 'h1',
    description: 'p',
    buttonDelete: '#deletePost',
  },
}
