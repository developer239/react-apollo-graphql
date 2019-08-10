import React from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import { Grid, PageHeader } from 'react-bootstrap'
import List from '../../components/PostsList'
import LoadingSpinner from '../../components/LoadingSpinner'
import LoadingError from '../../components/LoadingError'
import { queryAllPosts } from '../../qql'


export const ListPosts = ({ data }) => {
  if (data.loading) {
    return <LoadingSpinner />
  }

  if (data.error) {
    return <LoadingError />
  }

  return (
    <Grid>
      <PageHeader>
        All posts
        <Link to={'/posts/create'}>
          <small>[add new]</small>
        </Link>
      </PageHeader>
      <List items={data.allPosts} />
    </Grid>
  )
}

ListPosts.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    allPosts: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
}

const ListPostsWithGraphQL = graphql(queryAllPosts, {})(ListPosts)

export default ListPostsWithGraphQL
