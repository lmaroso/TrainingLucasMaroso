import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Reactotron from '../Reactotron/ReactotronConfig';

import todos from './todo/reducer';
import books from './books/reducer';
import comments from './comments/reducer';

const reducers = combineReducers({
  todos,
  books,
  comments,
  form: formReducer
});

const store = createStore(reducers, Reactotron.createEnhancer());
export default store;
