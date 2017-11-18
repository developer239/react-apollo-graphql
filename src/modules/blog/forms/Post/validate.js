export default (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = 'You have to set post title'
  }

  if (!values.text) {
    errors.text = 'Post text is missing'
  }

  return (errors)
}
