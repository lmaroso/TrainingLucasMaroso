import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CardSection from '../CardSection';

import styles from './styles';

const NavigationButton = ({ title, onPress }) => {
  return (
    <CardSection>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </CardSection>
  );
};

NavigationButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default NavigationButton;
