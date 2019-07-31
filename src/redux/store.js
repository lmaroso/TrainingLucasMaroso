import { createStore, combineReducers } from 'redux';

import Reactotron from '../Reactotron/ReactotronConfig';

import todos from './todo/reducer';

const reducers = combineReducers({
  todos
});

const store = createStore(reducers, Reactotron.createEnhancer());
export default store;
