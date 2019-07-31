import React from 'react';
import { View } from 'react-native';

import Input from '../../components/Input';
import List from '../../components/List';

import Footer from './components/Footer';
import styles from './styles';

const Todo = () => {
  return (
    <View style={styles.viewStyle}>
      <Input />
      <List />
      <Footer style={styles.footer} />
    </View>
  );
};

export default Todo;
