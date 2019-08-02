import axios from 'axios';

import { SUCCESS, FAILURE } from './constants';

const INITIAL_STATE = [];

export const success = data => {
  return {
    type: SUCCESS,
    payload: data
  };
};

export const failure = error => {
  return {
    type: FAILURE,
    payload: error
  };
};

export const loading = async () => {
  try {
    const response = await axios.get(`https://private-69a0f-lucasmaroso.apiary-mock.com/books`);
    const json = response.data;
    success(json);
  } catch (error) {
    failure(error);
  }
};

export const getBooks = () => {
  return dispatch => {
    dispatch(loading());
  };
};

/*


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload.text === ''
        ? state
        : state.concat({ text: action.payload.text, id: generateId.next().value, selected: false });
    case SUCCESS:
      return sarasa
    case FAILURE:
      return sarasa
    default:
      return true;
  }
};
*/
