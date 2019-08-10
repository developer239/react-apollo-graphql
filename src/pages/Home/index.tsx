import React from 'react'
import { Typography } from 'antd'
import { PagesList } from 'pages/Blog/components/PagesList'

export const HomePage = () => (
  <>
    <Typography.Title level={2}>All Pages</Typography.Title>
    <PagesList />
  </>
)
