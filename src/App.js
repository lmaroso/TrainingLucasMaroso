import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import reducers from './Reducers';
import Title from './Components/Title';
import Input from './Components/Input';
import List from './Components/List';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Title />
        <Input />
        <List />
      </View>
    </Provider>
  );
};

export default App;
