import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { RegisterPage } from './pages/Register'
import { MePage } from './pages/Me'
import { NotFoundPage } from './pages/NotFound'
import { LoginPage } from './pages/Login'
import { LogoutPage } from './pages/Logout'

export const ROUTE_PATHS = {
  home: '/',
  me: '/me',
  register: '/register',
  login: '/login',
  logout: '/logout',
  notFound: '*',
}

export const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.home} exact component={HomePage} />
    <Route path={ROUTE_PATHS.me} exact component={MePage} />
    <Route path={ROUTE_PATHS.register} exact component={RegisterPage} />
    <Route path={ROUTE_PATHS.login} exact component={LoginPage} />
    <Route path={ROUTE_PATHS.logout} exact component={LogoutPage} />
    <Route path={ROUTE_PATHS.notFound} exact component={NotFoundPage} />
  </Switch>
)
