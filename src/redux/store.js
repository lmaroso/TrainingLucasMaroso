import { createStore, combineReducers } from 'redux';

import Reactotron from '../Reactotron/ReactotronConfig';

import todos from './todo/reducer';
import books from './books/reducer';

const reducers = combineReducers({
  todos,
  books
});

const store = createStore(reducers, Reactotron.createEnhancer());
export default store;
