const initialState = {
  items: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_CONTENT':
      return {
        ...state,
        items: action.payload.items,
      }
    default:
      return state;
  }
}

export default reducer;