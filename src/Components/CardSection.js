/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative'
  },
  checkedStyle: {
    backgroundColor: '#dddddd',
    borderColor: '#b1b1b1'
  }
};

const CardSection = ({ selected, children }) => {
  const { containerStyle, checkedStyle } = styles;

  return <View style={[containerStyle, selected && checkedStyle]}>{children}</View>;
};

export { CardSection };
