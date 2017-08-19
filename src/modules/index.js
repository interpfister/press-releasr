import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import { combineForms } from 'react-redux-form';

const ics = {
  style: '',
  climate: '',
  age: '',
  vintage: '',
  varietals: '',
  country: '',
  region: '',
  subregion: '',
  quality: '',
  otherObservations: ''
};

export default combineReducers({
  router: routerReducer,
  counter,
  forms: combineForms({general: {}, conclusions: [ ics, ics, ics], results: [ ics, ics, ics]})
})
