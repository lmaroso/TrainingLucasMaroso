import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text>Remove selected items</Text>
    </View>
  );
};

const styles = {
  footerStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

export default Footer;
