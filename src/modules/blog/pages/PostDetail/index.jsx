import React from 'react'
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
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    Post: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
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
