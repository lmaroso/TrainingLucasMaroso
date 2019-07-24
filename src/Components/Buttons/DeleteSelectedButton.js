import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

const DeleteSelectedButton = ({ onPress }) => {
  const { textStyle } = Styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>Remove selected items</Text>
    </TouchableOpacity>
  );
};

DeleteSelectedButton.propTypes = {
  onPress: PropTypes.func
};

export default DeleteSelectedButton;
