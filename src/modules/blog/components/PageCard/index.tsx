import React, { FC } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { Card, CardLink } from './styled'
import { ListPages_listPages } from '../../gql/__generated__/ListPages'

interface IProps {
  page: Omit<ListPages_listPages, '__typename'>
}

export const PageCard: FC<IProps> = ({ page }) => (
  <Card title={page.title} bordered={false}>
    <LinesEllipsis text={page.text} maxLine={3} ellipsis="..." />
    <CardLink to={`/blog/${page.id}`}>Read More</CardLink>
  </Card>
)
