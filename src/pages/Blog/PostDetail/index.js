import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { POST_DETAIL } from 'modules/blog/gql'


export const PostDetailPage = ({ match: { params: { postId } } }) => (
  <div>
    <Query
      query={POST_DETAIL}
      variables={{ id: postId }}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        return (
          <div>
            <h2>{data.Post.title}</h2>
            <p>{data.Post.text}</p>
          </div>
        )
      }}
    </Query>
  </div>
)

PostDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PostDetailPage
