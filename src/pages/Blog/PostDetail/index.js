import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { H2, P } from 'components/Typography'
import { Query } from 'components'
import { nl2br } from 'utils/typography'
import { POST_DETAIL } from 'modules/blog/gql'


export const PostDetailPage = ({ match: { params: { postId } } }) => (
  <section>
    <Query
      query={POST_DETAIL}
      variables={{ id: postId }}
    >
      {({ data: { Post: { title, text } } }) => (
        <Fragment>
          <H2>{title}</H2>
          <P>{nl2br(text)}</P>
        </Fragment>
      )}
    </Query>
  </section>
)

PostDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PostDetailPage
