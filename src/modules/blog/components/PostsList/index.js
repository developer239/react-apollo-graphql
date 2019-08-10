import React from 'react'
import PropTypes from 'prop-types'
import nl2br from 'react-nl2br'
import { Link } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'
import { withApollo } from 'react-apollo'
import { queryPostDetail } from 'modules/blog/qql'
import { Button } from 'components'


export const PostListComponent = ({ items, handlePrefetchDetail }) => (
  <div id="posts">
    {items.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{nl2br(item.text)}</p>
        <Link to={`/posts/${item.id}`}>
          <Button
            onFocus={handlePrefetchDetail(item.id)}
            onMouseOver={handlePrefetchDetail(item.id)}
          >
            Detail
          </Button>
        </Link>
      </div>
    ))}
  </div>
)

PostListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  client: PropTypes.shape({ // eslint-disable-line
    query: PropTypes.func.isRequired,
  }).isRequired,
  handlePrefetchDetail: PropTypes.func.isRequired,
}

const enhance = compose(
  withApollo,
  withHandlers({
    handlePrefetchDetail: ({ client }) => (postId) => () => client.query({ // eslint-disable-line
      query: queryPostDetail,
      variables: { id: postId },
    }),
  }),
)

export default enhance(PostListComponent)
