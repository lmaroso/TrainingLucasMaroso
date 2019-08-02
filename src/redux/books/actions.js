import { LOADING, SUCCESS, FAILURE } from './constants';

export const actionCreators = {
  loading: () => {
    return {
      type: LOADING
    };
  },
  loadingSuccess: () => {
    return {
      type: SUCCESS,
      payload: data
    };
  },
  loadingFailed: () => {
    return {
      type: FAILURE,
      payload: error
    };
  }
};
