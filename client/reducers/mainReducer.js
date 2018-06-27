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
      return({...state, posts: newPosts});
    case constants.ADD_COMMENT: 
      let newComments = {...state.comments};
      newComments[action.payload.codePhoto].push(action.payload.comment)
      return({...state, comments: newComments});
    case constants.DELETE_COMMENT: 
      let comments = {...state.comments};
      comments[action.payload.codePhoto].splice(action.payload.index, 1);
      return ({...state, comments});
    default: 
      return ({...state});
  }
}