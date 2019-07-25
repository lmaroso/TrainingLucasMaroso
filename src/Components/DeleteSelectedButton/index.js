import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DeleteSelectedButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textStyle}>Remove completed tasks</Text>
    </TouchableOpacity>
  );
};

DeleteSelectedButton.propTypes = {
  onPress: PropTypes.func
};

export default DeleteSelectedButton;
