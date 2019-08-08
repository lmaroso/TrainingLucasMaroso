import { SUCCESS, FAILURE, CLEAN_FIELDS } from './constants';

export const actionCreators = {
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
  cleanFields: () => {
    return {
      type: CLEAN_FIELDS
    };
  }
};
