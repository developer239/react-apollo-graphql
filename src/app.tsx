import React from 'react'
import { GlobalStyles } from 'styles'
import { Layout } from 'components/Layout'
import { Navigation } from 'components/Navigation'
import { Routes } from 'routes'
import 'antd/dist/antd.css'

export const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Navigation />
      <Routes />
    </Layout>
  </>
)
