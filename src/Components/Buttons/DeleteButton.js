import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import Styles from './Styles';

const DeleteButton = ({ onPress }) => {
  const { deleteButtonStyle } = Styles;
  return (
    <TouchableOpacity onPress={onPress} style={deleteButtonStyle}>
      <Icon name="close" size={30} color="red" />
    </TouchableOpacity>
  );
};

DeleteButton.propTypes = {
  onPress: PropTypes.func
};

export default DeleteButton;
