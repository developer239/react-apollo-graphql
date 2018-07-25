import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { H2, P } from 'components/Typography'
import { Button, Link } from 'components'
import { ALL_POSTS } from 'modules/blog/gql'


const PostContainer = styled.div`
  margin-bottom: 25px;
`

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
              <PostContainer key={post.id}>
                <H2>{post.title}</H2>
                <P>{post.text}</P>
                <Link to={`/posts/${post.id}`}><Button>edit</Button></Link>
              </PostContainer>
            ))}
          </div>
        )
      }}
    </Query>
  </div>
)

ListPostsPage.propTypes = {}

export default ListPostsPage
