import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CardSection = ({ selected, children }) => {
  return <View style={[styles.container, selected && styles.checked]}>{children}</View>;
};

CardSection.propTypes = {
  selected: PropTypes.bool
};

export { CardSection };
