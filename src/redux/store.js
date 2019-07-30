import { createStore } from 'redux';

import Reactotron from '../Reactotron/ReactotronConfig';

import reducers from './todo/reducer';

const store = createStore(reducers, Reactotron.createEnhancer());

export default store;
