import React, { Fragment } from 'react'
import styled from 'styled-components'
import { H2, P } from 'components/Typography'
import { Button, Link, Query } from 'components'
import { nl2br } from 'utils/typography'
import { ALL_POSTS } from 'modules/blog/gql'


const PostContainer = styled.div`
  margin-bottom: 25px;
`

export const ListPostsPage = () => (
  <Query
    query={ALL_POSTS}
  >
    {({ data: { allPosts } }) => (
      <Fragment>
        {allPosts.map(({ id, title, text }) => (
          <PostContainer key={id}>
            <H2>{title}</H2>
            <P>{nl2br(text)}</P>
            <Link to={`/posts/${id}`}><Button>edit</Button></Link>
          </PostContainer>
        ))}
      </Fragment>
    )}
  </Query>
)

ListPostsPage.propTypes = {}

export default ListPostsPage
