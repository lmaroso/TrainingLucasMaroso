import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './Reducers';
import Title from './Components/Title';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Title />
    </Provider>
  );
};

export default App;
