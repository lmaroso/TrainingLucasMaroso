import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TextButton = ({ onPress, title }) => {
  return (
    <View style={styles.textButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

TextButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string
};

export default TextButton;
