import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { H2, P } from 'components/Typography'
import { nl2br } from 'utils/typography'
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
            <H2>{data.Post.title}</H2>
            <P>{nl2br(data.Post.text)}</P>
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
