const LikesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LIKE':
      return [...state, action.payload]
    case 'REMOVE_LIKE':
      return state.filter((item) => item.id !== action.payload.id)
    default: 
      return state
  }
}

export default LikesReducer;