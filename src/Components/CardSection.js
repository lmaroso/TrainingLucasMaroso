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
    borderColor: '#ddd',
    position: 'relative'
  }
};

const CardSection = props => {
  const { children } = props;
  return <View style={[styles.containerStyle]}>{children}</View>;
};

export { CardSection };
