import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import Reactotron from '../Reactotron/ReactotronConfig';
import Title from '../Components/Title';
import Input from '../Components/Input';
import List from '../Components/List';
import Footer from '../Components/Footer';
import reducers from '../Reducers';

import styles from './styles';

const App = () => {
  return (
    <Provider store={createStore(reducers, Reactotron.createEnhancer())}>
      <View style={{ flex: 1 }}>
        <Title />
        <Input />
        <List />
        <Footer style={styles.footerStyle} />
      </View>
    </Provider>
  );
};

export default App;
