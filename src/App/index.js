import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reactotron from '../Reactotron/ReactotronConfig';
import reducers from '../Reducers';
import Router from '../Router';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, Reactotron.createEnhancer())}>
        <Router />
      </Provider>
    );
  }
}

export default App;
