import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Reactotron from '../Reactotron/ReactotronConfig';

import todos from './todo/reducer';

const reducers = combineReducers({
  todos
});

const middleware = [Reactotron.createEnhancer(), applyMiddleware(thunk)];

const store = createStore(reducers, applyMiddleware(...middleware));
export default store;
