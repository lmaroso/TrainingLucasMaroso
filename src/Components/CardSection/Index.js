/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

const CardSection = ({ selected, children }) => {
  const { containerStyle, checkedStyle } = Styles;
  return <View style={[containerStyle, selected && checkedStyle]}>{children}</View>;
};

CardSection.propTypes = {
  selected: PropTypes.bool
};

export { CardSection };
