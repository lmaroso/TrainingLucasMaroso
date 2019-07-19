import { ADD_TODO, REMOVE_TODO, REMOVE_SELECTED, TOGGLE_SELECT } from '../Actions/types';

const INITIAL_STATE = [
  {
    text: '',
    selected: false
  }
];

const testFunction = (state, todo) => {
  const myReturn = [...state, todo];
  console.log(myReturn);
  return myReturn;
};

const removeElemOfIndex = (index, array) => {
  return array.filter(elem => index !== array.indexOf(elem));
};

const toggleSelectHelper = (position, state) => {
  const elem = state.filter(e => position === state.indexOf(e)); // obtengo elem a seleccionar.
  const newState = removeElemOfIndex(position, state); // elimino elem del state.
  elem[selected] = !elem[selected]; // cambio selected del elem por true.
  return newState.splice(position, 0, elem); // agrego elem al state en misma posicion.
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return testFunction(state, action.payload);
    case REMOVE_TODO:
      return removeElemOfIndex(action.payload, state);
    case REMOVE_SELECTED:
      return state.filter(elem => elem.selected === true);
    case TOGGLE_SELECT:
      return toggleSelectHelper(action.payload, state);
    default:
      return state;
  }
};
