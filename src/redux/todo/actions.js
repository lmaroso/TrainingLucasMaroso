import { ADD_TODO, REMOVE_TODO, REMOVE_SELECTED, TOGGLE_SELECT } from './constants';

export const actionCreators = {
  addTodo: todo => {
    return {
      type: ADD_TODO,
      payload: {
        text: todo
      }
    };
  },
  removeTodo: id => {
    return {
      type: REMOVE_TODO,
      payload: id
    };
  },
  removeSelected: () => {
    return {
      type: REMOVE_SELECTED
    };
  },
  toggleSelect: id => {
    return {
      type: TOGGLE_SELECT,
      payload: id
    };
  }
};
