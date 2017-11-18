import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'


const middleware = []

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

if (module.hot) {
  module.hot.accept('./reducer', () => {
    // eslint-disable-next-line
    const nextRootReducer = require('./reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
