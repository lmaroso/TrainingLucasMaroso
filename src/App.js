import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';

import reducers from './Reducers';
import Title from './Components/Title';
import Input from './Components/Input';
import List from './Components/List';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Title />
        <Input />
        <List />
        <View style={{justifyContent: 'flex-end'}}>
          <Text> hola </Text>
        </View>
      </View>
    </Provider>
  );
};

export default App;
