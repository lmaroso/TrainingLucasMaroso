import { ADD_TODO, REMOVE_TODO, REMOVE_SELECTED, TOGGLE_SELECT } from '../Actions/types';

const INITIAL_STATE = [
  {
    id: '1',
    text: 'Hola',
    selected: true
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case REMOVE_SELECTED:
      return state.filter(elem => elem.selected === true);
    case TOGGLE_SELECT:
      return state.map(elem => (elem.id === action.payload ? { ...elem, selected: !elem.selected } : elem)); // toggleSelectHelper(action.payload, state);
    default:
      return state;
  }
};
