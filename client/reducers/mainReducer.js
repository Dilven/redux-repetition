import * as constants from '../constants';
import postsFromBase from '../data/posts'
import commentsFromBase from '../data/comments'


const initialState = {
  posts: postsFromBase,
  comments: commentsFromBase
}

export const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_DATA: 
      return({...state, posts: postsFromBase});
    case constants.GIVE_LIKE:
      const index = action.payload.index;
      const newPosts = [...state.posts];
      newPosts[index].likes ++;
      return({...state, posts: newPosts})
    default: 
      return ({...state});
  }
}