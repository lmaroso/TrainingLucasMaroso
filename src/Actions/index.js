import { ADD_TODO, REMOVE_TODO, REMOVE_SELECTED, TOGGLE_SELECT } from './types';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const removeTodo = position => {
  return {
    type: REMOVE_TODO,
    payload: position
  };
};

export const removeSelected = () => {
  return {
    type: REMOVE_SELECTED
  };
};

export const toggleSelect = position => {
  return {
    type: TOGGLE_SELECT,
    payload: position
  };
};
