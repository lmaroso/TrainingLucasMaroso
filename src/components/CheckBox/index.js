import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CheckBox = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.uncheckedCheckBox}>
      <View style={[selected && styles.checkedCheckBox]} />
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  selected: PropTypes.bool,
  onPress: PropTypes.func
};

export default CheckBox;
