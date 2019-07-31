import React from 'react';
import { View } from 'react-native';

import Input from '../Input';
import List from '../List';
import Footer from '../Footer';

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
