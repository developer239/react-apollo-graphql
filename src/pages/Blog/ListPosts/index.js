import React, { Fragment } from 'react'
import styled from 'styled-components'
import { H2, P } from 'components/Typography'
import { Button, Link, Query, DeleteButton } from 'components'
import { nl2br } from 'utils/typography'
import { ALL_POSTS, DELETE_POST } from 'modules/blog/gql'


const PostContainer = styled.div`
  margin-bottom: 25px;
`

const CreateNewButton = styled(Button)`
  margin-bottom: 25px;
`

export const ListPostsPage = () => (
  <section>
    <Link to={`/posts/new`}>
      <CreateNewButton bgType="success">create new post</CreateNewButton>
    </Link>
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
              <DeleteButton
                mutation={DELETE_POST}
                variables={{ id }}
                update={(cache, { data: { deletePost } }) => {
                  const postsCache = cache.readQuery({ query: ALL_POSTS })
                  cache.writeQuery({
                    query: ALL_POSTS,
                    data: {
                      allPosts: postsCache.allPosts.filter(post => post.id !== deletePost.id),
                    },
                  })
                }}
              />
            </PostContainer>
          ))}
        </Fragment>
      )}
    </Query>
  </section>
)

export default ListPostsPage
