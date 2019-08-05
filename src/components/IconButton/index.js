import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import styles from './styles';
import { ICON_SIZE } from './constants';

const IconButton = ({ name, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Icon name={name} size={ICON_SIZE} color={color} />
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  color: PropTypes.string
};

export default IconButton;
