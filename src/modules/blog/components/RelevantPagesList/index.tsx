import React, { FC } from 'react'
import { PageCard } from '../PageCard'
import { ListPages_listPages } from '../../gql/__generated__/ListPages'
import { PageDetail_pageDetail_user } from '../../gql/__generated__/PageDetail'
import { Container, PagesContainer } from './styled'
import { H3 } from 'components/Typography/H3'

interface IProps {
  pages: Array<Omit<ListPages_listPages, '__typename'>>
  user?: Omit<PageDetail_pageDetail_user, '__typename'>
  title?: string
}

export const RelevantPagesList: FC<IProps> = ({ pages, user, title }) => (
  <Container>
    <H3>{title || `More from ${user.email}`}</H3>
    <PagesContainer>
      {pages.map(page => (
        <PageCard key={page.id} page={page} />
      ))}
    </PagesContainer>
  </Container>
)
