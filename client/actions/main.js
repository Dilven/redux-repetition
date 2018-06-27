import * as constants from '../constants';

export function getData () {
  return {
    type: constants.GET_DATA,
  };
};

export function giveLike(index) {
  return {
    type: constants.GIVE_LIKE,
    payload: {
      index
    }
  };
};

export function addComment(codePhoto, comment) {
  return {
    type: constants.ADD_COMMENT,
    payload: {
      comment,
      codePhoto
    }
  };
};

export function deleteComment(codePhoto, index) {
  return {
    type: constants.DELETE_COMMENT,
    payload: {
      codePhoto,
      index,
    }
  };
};