import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { NotFoundPage } from './pages/NotFound'

export const ROUTE_PATHS = {
  home: '/',
  about: '/about',
  notFound: '*',
}

export const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.home} exact component={HomePage} />
    <Route path={ROUTE_PATHS.about} exact component={AboutPage} />
    <Route path={ROUTE_PATHS.notFound} exact component={NotFoundPage} />
  </Switch>
)
