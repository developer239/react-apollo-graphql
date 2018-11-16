import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Section, Typography } from '@michal.jarnot/ui-components'
import { Query } from 'components'
import { nl2br } from 'utils/typography'
import { POST_DETAIL } from 'modules/blog/gql'


const { H2, P } = Typography

export const PostDetailPage = ({ match: { params: { postId } } }) => (
  <Section>
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
  </Section>
)

PostDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PostDetailPage
