import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size} />
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.number
};

export { Spinner };
