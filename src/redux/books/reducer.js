import { SUCCESS, FAILURE, CLEAN_FIELDS } from './constants';

const INITIAL_STATE = {
  isLoading: true,
  error: null,
  books: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, books: [...action.payload], isLoading: false };
    case FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case CLEAN_FIELDS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
