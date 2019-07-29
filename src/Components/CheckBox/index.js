import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CheckBox = ({ selected, onPress }) => {
  const { checkedCheckBoxStyle, uncheckedCheckBoxStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={uncheckedCheckBoxStyle}>
      <View style={[selected && checkedCheckBoxStyle]} />
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  selected: PropTypes.bool,
  onPress: PropTypes.func
};

export default CheckBox;
