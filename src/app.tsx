import React from 'react'
import { Layout } from 'components/Layout'
import { Navigation } from 'components/Navigation'
import { Routes } from 'routes'

export const App = () => (
  <Layout>
    <Navigation />
    <Routes />
  </Layout>
)
