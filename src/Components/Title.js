import React from 'react';
import { Text, View } from 'react-native';

const Title = () => {
  // eslint-disable-next-line no-use-before-define
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Todo List</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#87ceeb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF'
  }
};

export default Title;
