import React from 'react';
import { Text, View } from 'react-native';

import Styles from './Styles';

const Title = () => {
  // eslint-disable-next-line no-use-before-define
  const { textStyle, viewStyle } = Styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Todo List</Text>
    </View>
  );
};

export default Title;
