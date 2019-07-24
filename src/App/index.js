import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import Reactotron from '../Reactotron/ReactotronConfig';
import Title from '../Components/Title/Index';
import Input from '../Components/Input/Input';
import List from '../Components/List/List';
import Footer from '../Components/Footer/Footer';
import reducers from '../Reducers';

import { footerStyle } from './styles';

const App = () => {
  return (
    <Provider store={createStore(reducers, Reactotron.createEnhancer())}>
      <View style={{ flex: 1 }}>
        <Title />
        <Input />
        <List />
        <Footer style={footerStyle} />
      </View>
    </Provider>
  );
};

export default App;
