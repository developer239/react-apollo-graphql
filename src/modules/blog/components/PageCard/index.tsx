import React, { FC } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { ListPages_listPages } from '../../gql/__generated__/ListPages'
import { Card, CardLink } from './styled'

interface IProps {
  page: Omit<ListPages_listPages, '__typename'>
}

export const COMPONENT_PAGE_CARD_TEST_ID = 'page-card-component'

export const PageCard: FC<IProps> = ({ page }) => (
  <Card
    data-testid={COMPONENT_PAGE_CARD_TEST_ID}
    title={page.title}
    bordered={false}
  >
    <LinesEllipsis text={page.text} maxLine={3} ellipsis="..." />
    <CardLink to={`/blog/${page.id}`}>Read More</CardLink>
  </Card>
)
