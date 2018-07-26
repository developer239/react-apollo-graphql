import React, { Fragment } from 'react'
import styled from 'styled-components'
import { H2, P } from 'components/Typography'
import { Button, Link, Query } from 'components'
import { nl2br } from 'utils/typography'
import { ALL_POSTS } from 'modules/blog/gql'


const PostContainer = styled.div`
  margin-bottom: 25px;
`

const CreateNewLink = styled(Link)`
  margin-bottom: 25px;
`

export const ListPostsPage = () => (
  <Fragment>
    <CreateNewLink to={`/posts/new`}><Button type="success">create new post</Button></CreateNewLink>
    <Query
      query={ALL_POSTS}
    >
      {({ data: { allPosts } }) => (
        <Fragment>
          {allPosts.map(({ id, title, text }) => (
            <PostContainer key={id}>
              <H2>{title}</H2>
              <P>{nl2br(text)}</P>
              <Link to={`/posts/${id}`}><Button>detail</Button></Link>
              <Link to={`/posts/${id}/edit`}><Button>edit</Button></Link>
            </PostContainer>
          ))}
        </Fragment>
      )}
    </Query>
  </Fragment>
)

ListPostsPage.propTypes = {}

export default ListPostsPage
