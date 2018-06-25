import * as constants from '../constants';
import postsFromBase from '../data/posts'

const initialState = {
  posts: []
}

export const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_DATA: 
      return({...state, posts: postsFromBase});
    default: 
      return ({...state});
  }
}