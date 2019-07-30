import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from '../CardSection';

import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
/* class NavigationButton extends Component {
  render() { */
const NavigationButton = ({ title, onPress }) => {
  return (
    <CardSection>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </CardSection>
  );
};
// }

NavigationButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default NavigationButton;