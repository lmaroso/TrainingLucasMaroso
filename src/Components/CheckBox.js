import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  uncheckedCheckBoxStyle: {
    width: 30,
    height: 30,
    borderColor: '#000',
    borderRadius: 2,
    borderWidth: 2,
    marginRight: 10,
    padding: 3,
    backgroundColor: '#FFF'
  },
  checkedCheckBoxStyle: {
    borderColor: '#000',
    flex: 1,
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: '#000'
  }
};

const CheckBox = ({ selected, onPress }) => {
  const { checkedCheckBoxStyle, uncheckedCheckBoxStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={uncheckedCheckBoxStyle}>
      <View style={[selected && checkedCheckBoxStyle]} />
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  selected: PropTypes.bool,
  // toggleSelect: PropTypes.func
  onPress: PropTypes.func
};

export default CheckBox;
