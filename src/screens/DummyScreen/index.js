import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DummyScreen = () => {
  return <View style={styles.dummy} />;
};

DummyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default DummyScreen;
