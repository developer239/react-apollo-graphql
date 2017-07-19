import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import { Grid, PageHeader } from 'react-bootstrap'
import nl2br from 'react-nl2br'
import LoadingSpinner from '../../components/LoadingSpinner'
import LoadingError from '../../components/LoadingError'
import { queryPostDetail } from '../../qql'


export const PostsBaseContainer = ({ data }) => {
  if (data.loading) {
    return <LoadingSpinner />
  }

  if (data.error) {
    return <LoadingError />
  }

  return (
    <Grid>
      <PageHeader>
        {data.Post.title}
        <Link to={`/posts/${data.Post.id}/edit`}>
          <small>[edit]</small>
        </Link>
      </PageHeader>
      <p>{nl2br(data.Post.text)}</p>
    </Grid>
  )
}

PostsBaseContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    Post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

const PostsBaseContainerWithGraphQL = graphql(queryPostDetail, {
  options: ownProps => ({
    variables: {
      id: ownProps.params.postId,
    },
  }),
})(PostsBaseContainer)

export default PostsBaseContainerWithGraphQL
