import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Button, Grid } from 'react-bootstrap'
import nl2br from 'react-nl2br'
import { withApollo } from 'react-apollo'
import { queryPostDetail } from '../../qql'


export const PostListComponent = ({ items, client }) => {
  const prefetchDetail = postId => client.query({
    query: queryPostDetail,
    variables: { id: postId },
  })

  return (
    <Grid>
      {items.map(item => (
        <Row key={item.id}>
          <Col>
            <h3>{item.title}</h3>
            <p>{nl2br(item.text)}</p>
            <Link to={`/posts/${item.id}`}>
              <Button onMouseOver={() => prefetchDetail(item.id)} bsStyle="primary">Detail</Button>
            </Link>
          </Col>
        </Row>
      ))}
    </Grid>
  )
}

PostListComponent.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  client: React.PropTypes.shape({
    query: React.PropTypes.func.isRequired,
  }),
}

export default withApollo(PostListComponent)
