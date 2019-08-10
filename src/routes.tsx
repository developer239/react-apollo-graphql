import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { RegisterPage } from 'pages/Auth/Register'
import { MePage } from 'pages/Auth/Me'
import { NotFoundPage } from 'pages/NotFound'
import { LoginPage } from 'pages/Auth/Login'
import { LogoutPage } from 'pages/Auth/Logout'
import { CreatePagePage } from 'pages/Blog/Create'
import { EditPagePage } from 'pages/Blog/Edit'
import { DetailPage } from 'pages/Blog/Detail'

export const ROUTE_PATHS = {
  home: '/',
  notFound: '*',
  blog: {
    create: '/blog/create',
    edit: (id = ':pageId') => `/blog/${id}/edit`,
    detail: (id = ':pageId') => `/blog/${id}`,
  },
  auth: {
    me: '/me',
    register: '/register',
    login: '/login',
    logout: '/logout',
  },
}

export const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.home} exact component={HomePage} />
    <Route path={ROUTE_PATHS.blog.create} exact component={CreatePagePage} />
    <Route path={ROUTE_PATHS.blog.edit()} exact component={EditPagePage} />
    <Route path={ROUTE_PATHS.blog.detail()} exact component={DetailPage} />
    <Route path={ROUTE_PATHS.auth.me} exact component={MePage} />
    <Route path={ROUTE_PATHS.auth.register} exact component={RegisterPage} />
    <Route path={ROUTE_PATHS.auth.login} exact component={LoginPage} />
    <Route path={ROUTE_PATHS.auth.logout} exact component={LogoutPage} />
    <Route path={ROUTE_PATHS.notFound} exact component={NotFoundPage} />
  </Switch>
)
