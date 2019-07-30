import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import NavigationButton from '../NavigationButton';

import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class DummyScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.dummy}>
        <NavigationButton title="Go to Todo" onPress={() => navigation.navigate('home')} />
      </View>
    );
  }
}

DummyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default DummyScreen;
