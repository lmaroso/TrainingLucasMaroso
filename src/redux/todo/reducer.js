import { ADD_TODO, REMOVE_TODO, REMOVE_SELECTED, TOGGLE_SELECT } from './constants';

const INITIAL_STATE = [];

function* createIds() {
  let indice = 0;
  while (true) yield String((indice += 1));
}
const generateId = createIds();

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload.text === ''
        ? state
        : state.concat({ text: action.payload.text, id: generateId.next().value, selected: false });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case REMOVE_SELECTED:
      return state.filter(elem => !elem.selected);
    case TOGGLE_SELECT:
      return state.map(elem => (elem.id === action.payload ? { ...elem, selected: !elem.selected } : elem));
    default:
      return state;
  }
};
