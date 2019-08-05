import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Title = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
};

export default Title;
