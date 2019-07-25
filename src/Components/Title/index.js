import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Title = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Todo List</Text>
    </View>
  );
};

export default Title;
