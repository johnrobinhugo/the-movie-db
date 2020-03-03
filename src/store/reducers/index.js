import LikesReducer from './LikesReducer';
import { combineReducers } from 'redux';

const AllReducers = combineReducers({
  likes: LikesReducer
});

export default AllReducers;