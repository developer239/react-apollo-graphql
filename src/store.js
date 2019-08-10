import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import rootReducer from 'rootReducer'
import client from 'config/apolloClient'
import { IS_DEVELOP } from 'config'


// https://github.com/reactjs/react-router-redux/issues/305
const isClient = typeof document !== 'undefined'

// Initial state, I prefer to have this empty and initialize state in reducers themselves
const initialState = {}

const routingMiddleware = routerMiddleware(browserHistory)
const middlewares = [thunk, routingMiddleware, client.middleware()]

const enhancers = []
if (isClient && IS_DEVELOP) {
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined

// Reducer hot module replacement
if (module.hot) {
  module.hot.accept('rootReducer', () => {
    const nextRootReducer = require('rootReducer').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
