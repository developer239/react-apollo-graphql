import React from 'react'
import { graphql } from 'react-apollo'
import { Grid, PageHeader } from 'react-bootstrap'
import PropTypes from 'prop-types'
import PostForm from 'modules/blog/forms/Post'
import { compose, withHandlers } from 'recompose'
import { createPost, queryAllPosts } from 'modules/blog/qql'


const PostCreatePage = ({ handleOnSubmit }) => (
  <Grid>
    <PageHeader>Create Posts</PageHeader>
    <PostForm onSubmit={handleOnSubmit} />
  </Grid>
)

PostCreatePage.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired, // eslint-disable-line
  history: PropTypes.shape({ // eslint-disable-line
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const enhance = compose(
  graphql(createPost),
  withHandlers({
    handleOnSubmit: ({ history, mutate }) =>
      data =>
        mutate({
          variables: data,
          refetchQueries: [{ query: queryAllPosts }],
        })
          .then(response => history.push(`/posts/${response.data.createPost.id}`))
          .catch(() => global.alert('There was an error while creating your post.')),
  }),
)

export default enhance(PostCreatePage)
