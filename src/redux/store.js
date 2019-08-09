import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Reactotron from '../Reactotron/ReactotronConfig';

import todos from './todo/reducer';
import books from './books/reducer';

const reducers = combineReducers({
  todos,
  books,
  form: formReducer
});

const store = createStore(reducers, Reactotron.createEnhancer());
export default store;
