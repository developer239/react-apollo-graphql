import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Counter from 'pages/Counter'
import NotFound from 'pages/NotFound'
import { ListPosts, PostCreate, PostDetail, PostEdit } from 'pages/Blog'

export const ROUTE_PATHS = {
  home: '/',
  counter: '/counter',
  createPost: '/posts/new',
  editPost: (id = ':postId') => `/posts/${id}/edit`,
  updatePost: (id = ':postId') => `/posts/${id}`,
  listPosts: '/posts',
}

const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.home} exact component={Home} />
    <Route path={ROUTE_PATHS.counter} exact component={Counter} />
    <Route path={ROUTE_PATHS.createPost} exact component={PostCreate} />
    <Route path={ROUTE_PATHS.editPost()} exact component={PostEdit} />
    <Route path={ROUTE_PATHS.updatePost()} exact component={PostDetail} />
    <Route path={ROUTE_PATHS.listPosts} exact component={ListPosts} />
    <Route path="*" exact component={NotFound} />
  </Switch>
)

export default Routes
