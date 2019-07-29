import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { CardSection } from '../CardSection';

import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
/* class NavigationButton extends Component {
  render() { */
const NavigationButton = ({title, onPress }) => {
  return (
    <CardSection>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </CardSection>
  );
};
// }

export default NavigationButton;
