import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import { Grid, PageHeader } from 'react-bootstrap'
import { Button } from 'components'
import { showSpinnerWhileApolloLoading, showApolloError, showNoData } from 'common/helpers'
import List from 'modules/blog/components/PostsList'
import { queryAllPosts } from 'modules/blog/qql'


export const ListPostsPage = ({ data: { allPosts } }) => (
  <Grid>
    <PageHeader>All posts</PageHeader>
    <Link to="/posts/create">
      <Button bsStyle="primary">Create New Post</Button>
    </Link>
    <List items={allPosts} />
  </Grid>
)

ListPostsPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
    allPosts: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
  }).isRequired,
}

const enhance = compose(
  graphql(queryAllPosts),
  showApolloError(),
  showSpinnerWhileApolloLoading(),
  showNoData(props => !props.data.allPosts)('There are no posts in database.'),
)

export default enhance(ListPostsPage)
