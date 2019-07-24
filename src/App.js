import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import Reactotron from './ReactotronConfig';
import reducers from './Reducers';
import Title from './Components/Title';
import Input from './Components/Input';
import List from './Components/List';
import Footer from './Components/Footer';

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

const styles = {
  footerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
};

export default App;
