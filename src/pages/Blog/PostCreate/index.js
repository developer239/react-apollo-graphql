import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Section, Typography } from '@michal.jarnot/ui-components'
import { Mutation } from 'components'
import PostForm from 'modules/blog/forms/Post'
import { CREATE_POST, ALL_POSTS } from 'modules/blog/gql'


const { H2 } = Typography

const updatePostCache = (cache, { data: { createPost } }) => {
  const postsCache = cache.readQuery({ query: ALL_POSTS })
  cache.writeQuery({
    query: ALL_POSTS,
    data: {
      allPosts: [createPost, ...postsCache.allPosts],
    },
  })
}

export const PostCreatePage = ({ history: { push } }) => (
  <Section>
    <Mutation
      mutation={CREATE_POST}
      update={updatePostCache}
      onCompleted={({ createPost: { id }}) => push(`/posts/${id}`)}
    >
      {mutate => (
        <Fragment>
          <H2>Create New Post</H2>
          <PostForm submit={values => mutate({ variables: values })} />
        </Fragment>
      )}
    </Mutation>
  </Section>
)

PostCreatePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default PostCreatePage
