import { combineReducers } from 'redux';
import { ADD_LIKE, REMOVE_LIKE } from './actions';

function likesReducer(state = [], action) {
  switch(action.type) {
    case ADD_LIKE:
      return [...state, action.payload]
    case REMOVE_LIKE:
      return state.filter((item) => item.id !== action.payload.id)
    default: 
      return state
  }
}

const allReducers = combineReducers({
  likes: likesReducer
})

export default allReducers;