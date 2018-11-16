import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Section, Typography } from '@michal.jarnot/ui-components'
import { Query, Mutation } from 'components'
import { POST_DETAIL, UPDATE_POST } from 'modules/blog/gql'
import PostForm from 'modules/blog/forms/Post'


const { H2 } = Typography

export const PostEditPage = ({ history: { push }, match: { params: { postId } } }) => (
  <Section>
    <Query
      query={POST_DETAIL}
      variables={{ id: postId }}
    >
      {({ data: { Post } }) => (
        <Mutation mutation={UPDATE_POST} onCompleted={() => push(`/posts/${postId}`)}>
          {mutate => (
            <Fragment>
              <H2>Edit Post</H2>
              <PostForm
                initialValues={Post}
                submit={values => mutate({ variables: values })}
              />
            </Fragment>
          )}
        </Mutation>
      )}
    </Query>
  </Section>
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
