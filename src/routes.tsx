import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { RegisterPage } from './pages/Register'
import { NotFoundPage } from './pages/NotFound'

export const ROUTE_PATHS = {
  home: '/',
  register: '/register',
  notFound: '*',
}

export const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.home} exact component={HomePage} />
    <Route path={ROUTE_PATHS.register} exact component={RegisterPage} />
    <Route path={ROUTE_PATHS.notFound} exact component={NotFoundPage} />
  </Switch>
)
