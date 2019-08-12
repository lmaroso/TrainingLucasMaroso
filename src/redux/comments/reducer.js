import { ADD_COMMENT } from './constants';

const INITIAL_STATE = [];

function* createIds() {
  let indice = 0;
  while (true) yield String((indice += 1));
}
const generateId = createIds();

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return state.concat({ id: generateId.next().value, ...action.payload });
    default:
      return state;
  }
};
