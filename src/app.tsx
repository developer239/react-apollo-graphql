import React from 'react'
import { GlobalStyles } from 'styles'
import { Navigation } from 'components/Navigation'
import { Layout } from 'components/Layout'
import { Content } from 'components/Content'
import { Routes } from 'routes'
import 'antd/dist/antd.css'

export const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Navigation />
      <Content>
        <Routes />
      </Content>
    </Layout>
  </>
)
