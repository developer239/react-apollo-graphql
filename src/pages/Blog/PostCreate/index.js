import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'components'
import PostForm from 'modules/blog/forms/Post'
import { CREATE_POST } from 'modules/blog/gql'
import { H2 } from 'components/Typography'


export const PostCreatePage = ({ history }) => (
  <Fragment>
    <H2>Create New Post</H2>
    <Mutation mutation={CREATE_POST} onCompleted={() => history.push('/posts')}>
      {mutate => <PostForm submit={values => mutate({ variables: values })} />}
    </Mutation>
  </Fragment>
)

PostCreatePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default PostCreatePage
