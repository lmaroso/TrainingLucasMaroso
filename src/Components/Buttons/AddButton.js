import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
  buttonStyle: {
    type: 'clear',
    justifyContent: 'center',
    marginRight: 8,
    marginLeft: 5
  }
};

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Icon name="add" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default AddButton;
