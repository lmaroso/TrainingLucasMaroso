import { START, SUCCESS, FAILURE, CLEAN_BOOKS } from './constants';

export const actionCreators = {
  start: bool => {
    return {
      type: START,
      payload: bool
    };
  },
  success: data => {
    return {
      type: SUCCESS,
      payload: data
    };
  },
  failure: error => {
    return {
      type: FAILURE,
      payload: error
    };
  },
  cleanBooks: () => {
    return {
      type: CLEAN_BOOKS
    };
  }
};
