import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import client from 'config/apolloClient'
import { reducer as reduxForm } from 'redux-form'
import counter from 'modules/counter/ducks'


const rootReducer = combineReducers({
  routing: routerReducer,
  form: reduxForm,
  apollo: client.reducer(),
  counter,
})

export default rootReducer
