import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { toggleSelect } from '../Actions';

const CheckBox = selected => {
  const { checkedCheckBoxStyle, uncheckedCheckBoxStyle } = styles;
  return (
    <TouchableOpacity style={uncheckedCheckBoxStyle}>
      <View style={[selected && checkedCheckBoxStyle]} />
    </TouchableOpacity>
  );
};

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

export default connect(
  null,
  { toggleSelect }
)(CheckBox);
