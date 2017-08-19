import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import { combineForms } from 'react-redux-form';

export default combineReducers({
  router: routerReducer,
  counter,
  forms: combineForms({general: {}, conclusion: {}})
})
