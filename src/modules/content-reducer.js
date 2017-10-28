const initialState = {
  body: '',
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_CONTENT':
      return {
        ...state,
        body: action.payload.body,
      }
    default:
      return initialState;
  }
}

export default reducer;