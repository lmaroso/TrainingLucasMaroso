import { ADD_COMMENT } from './constants';

export const actionCreators = {
  addComment: comment => {
    return {
      type: ADD_COMMENT,
      payload: comment
    };
  }
};
