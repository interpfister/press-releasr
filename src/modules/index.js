import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// const ics = {
//   style: '',
//   age: '',
//   vintage: '',
//   varietals: '',
//   country: '',
//   region: '',
//   subregion: '',
//   quality: '',
//   otherObservations: ''
// };

// const initialFormState = {general: {}, conclusions: [ {}, {}, {}], results: [ {}, {}, {}]};

export default combineReducers({
  router: routerReducer,
  form: formReducer,
})
