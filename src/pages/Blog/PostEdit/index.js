import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { H2 } from 'components/Typography'
import { Query, Mutation } from 'components'
import { POST_DETAIL, UPDATE_POST } from 'modules/blog/gql'
import PostForm from 'modules/blog/forms/Post'


export const PostEditPage = ({ history, match: { params: { postId } } }) => (
  <Query
    query={POST_DETAIL}
    variables={{ id: postId }}
  >
    {({ data: { Post } }) => (
      <Fragment>
        <H2>Edit Post</H2>
        <Mutation mutation={UPDATE_POST} onCompleted={() => history.push(`/posts/${postId}`)}>
          {mutate => (
            <PostForm
              initialValues={Post}
              submit={values => mutate({ variables: values })}
            />
          )}
        </Mutation>
      </Fragment>
    )}
  </Query>
)

PostEditPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default PostEditPage
