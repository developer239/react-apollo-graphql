import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import store, { history } from 'store'
import client from 'config/apolloClient'
import App from 'modules/core/App'


// Makes dynamic route loading more convenient
const loadRoute = cb => module => cb(null, module.default)

// Catch unexpected errors when loading routes
const errorLoading = err => console.error(`Dynamic route loading failed ${err}`)

const AppRouter = props => (
  <ApolloProvider {...props} store={store} client={client}>
    <Router history={history}>
      <Route path={'/'} component={App}>
        <IndexRoute
          getComponent={
            (location, cb) => {
              System.import('modules/core/pages/Home')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/counter'}
          getComponent={
            (location, cb) => {
              System.import('modules/counter/containers/Base')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/posts'}
          getComponent={
            (location, cb) => {
              System.import('modules/blog/pages/ListPosts')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/posts/create'}
          getComponent={
            (location, cb) => {
              System.import('modules/blog/pages/PostCreate')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/posts/:postId'}
          getComponent={
            (location, cb) => {
              System.import('modules/blog/pages/PostDetail')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/posts/:postId/edit'}
          getComponent={
            (location, cb) => {
              System.import('modules/blog/pages/PostEdit')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
        <Route
          path={'/about'}
          getComponent={
            (location, cb) => {
              System.import('modules/core/pages/About')
                .then(loadRoute(cb))
                .catch(err => errorLoading(err))
            }
          }
        />
      </Route>
      <Route
        path="*"
        getComponent={
          (location, cb) => {
            System.import('modules/core/pages/NotFound')
              .then(loadRoute(cb))
              .catch(err => errorLoading(err))
          }
        }
      />
    </Router>
  </ApolloProvider>
)

export default AppRouter
