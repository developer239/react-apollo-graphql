import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Counter from 'pages/Counter'
import NotFound from 'pages/NotFound'
import {
  ListPosts,
  PostCreate,
  PostDetail,
  PostEdit,
} from 'pages/Blog'


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/counter" exact component={Counter} />
    <Route path="/posts/new" exact component={PostCreate} />
    <Route path="/posts/:postId/edit" exact component={PostEdit} />
    <Route path="/posts/:postId" exact component={PostDetail} />
    <Route path="/posts" exact component={ListPosts} />
    <Route path="*" exact component={NotFound} />
  </Switch>
)

export default Routes
