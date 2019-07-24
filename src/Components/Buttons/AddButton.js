import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Styles from './Styles';

const AddButton = ({ onPress }) => {
  const { addButtonStyle } = Styles;
  return (
    <TouchableOpacity onPress={onPress} style={addButtonStyle}>
      <Icon name="add" size={30} color="black" />
    </TouchableOpacity>
  );
};

AddButton.propTypes = {
  onPress: PropTypes.func
};

export default AddButton;
