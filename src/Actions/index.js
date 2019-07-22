import { ADD_TODO, REMOVE_TODO, REMOVE_SELECTED, TOGGLE_SELECT } from './types';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      text: todo,
      id: String(Math.random),
      selected: false
    }
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const removeSelected = () => {
  return {
    type: REMOVE_SELECTED
  };
};

export const toggleSelect = id => {
  return {
    type: TOGGLE_SELECT,
    payload: id
  };
};
