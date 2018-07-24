import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'components'
import { ALL_POSTS } from 'modules/blog/gql'


export const ListPostsPage = () => (
  <div>
    <Query
      query={ALL_POSTS}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        console.log('data ', data)
        return (
          <div>
            {data.allPosts.map(post => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <Link to={`/posts/${post.id}`}>edit</Link>
              </div>
            ))}
          </div>
        )
      }}
    </Query>
  </div>
)

ListPostsPage.propTypes = {}

export default ListPostsPage
