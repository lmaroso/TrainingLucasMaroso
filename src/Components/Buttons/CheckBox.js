import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

const CheckBox = ({ selected, onPress }) => {
  const { checkedCheckBoxStyle, uncheckedCheckBoxStyle } = Styles;
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
