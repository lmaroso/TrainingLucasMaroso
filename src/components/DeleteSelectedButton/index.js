import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DeleteSelectedButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

DeleteSelectedButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string
};

export default DeleteSelectedButton;
