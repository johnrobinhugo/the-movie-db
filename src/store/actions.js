// Action types
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

// Action creators
export function addLike(payload) {
  return {
    type: ADD_LIKE,
    payload
  }
}

export function removeLike(payload) {
  return {
    type: REMOVE_LIKE,
    payload
  }
}