import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import contentReducer from './content-reducer';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  content: contentReducer,
})
