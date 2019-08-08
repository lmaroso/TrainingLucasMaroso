import React from 'react';
import { Text, View, Modal } from 'react-native';
import PropTypes from 'prop-types';

import CardSection from '../CardSection';
import Button from '../Button';

import styles from './styles';

const ErrorModal = ({ error }) => {
  const [visible, setVisible] = React.useState(true);
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={() => setVisible(false)}>
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.text}>{error}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => setVisible(false)}>Accept</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

ErrorModal.propTypes = {
  error: PropTypes.string
};

export default ErrorModal;
