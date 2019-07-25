import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CardSection = ({ selected, children }) => {
  const { containerStyle, checkedStyle } = styles;
  return <View style={[containerStyle, selected && checkedStyle]}>{children}</View>;
};

CardSection.propTypes = {
  selected: PropTypes.bool
};

export { CardSection };
