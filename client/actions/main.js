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
  }
}