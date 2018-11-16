import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Button, Typography } from '@michal.jarnot/ui-components'
import { Query, ActionButton } from 'components'
import { nl2br } from 'utils/typography'
import { ALL_POSTS, DELETE_POST } from 'modules/blog/gql'


const { H2, P, A } = Typography

const updatePostCache = (cache, { data: { deletePost } }) => {
  const postsCache = cache.readQuery({ query: ALL_POSTS })
  cache.writeQuery({
    query: ALL_POSTS,
    data: {
      allPosts: postsCache.allPosts.filter(post => post.id !== deletePost.id),
    },
  })
}

export const ListPostsPage = () => (
  <Section>
    <A to={`/posts/new`} as={Link}>
      <Button>create new post</Button>
    </A>
    <Query
      query={ALL_POSTS}
    >
      {({ data: { allPosts } }) => (
        allPosts.map(({ id, title, text }) => (
          <div key={id}>
            <H2>{title}</H2>
            <P>{nl2br(text)}</P>
            <A to={`/posts/${id}`} as={Link}><Button>detail</Button></A>
            <A to={`/posts/${id}/edit`} as={Link}><Button>edit</Button></A>
            <ActionButton
              label="delete"
              mutation={DELETE_POST}
              variables={{ id }}
              update={updatePostCache}
            />
          </div>
        ))
      )}
    </Query>
  </Section>
)

export default ListPostsPage
