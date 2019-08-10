import React, { FC } from 'react'
import { Layout } from './components/Layout'
import { Navigation } from './components/Navigation'
import { renderRoutes, RouteConfig } from 'react-router-config'

interface IProps {
  route: RouteConfig
}

export const App: FC<IProps> = ({ route }) => (
  <Layout>
    <Navigation />
    {renderRoutes(route.routes)}
  </Layout>
)
