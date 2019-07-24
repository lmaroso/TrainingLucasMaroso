import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { removeSelected } from '../Actions';

const Footer = ({ removeAll }) => {
  return (
    <View style={styles.footerStyle}>
      <TouchableOpacity onPress={removeAll} style={{ marginRight: 10 }}>
        <Text style={styles.textStyle}>Remove selected items</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footerStyle: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderColor: '#ddd',
    elevation: 10
  },
  textStyle: {
    fontSize: 18,
    color: 'red'
  }
};

const mapDispatchToProps = dispatch => ({
  removeAll: () => dispatch(removeSelected())
});

export default connect(
  null,
  mapDispatchToProps
)(Footer);
