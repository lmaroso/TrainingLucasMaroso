import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import connect from 'react-redux';

import { removeSelected } from '../Actions';

const DeleteSelectedButton = ({ todos }) => {
  
    <TouchableOpacity onPress={{todos => removeSelected(todos)}}>
        <Text style={styles.textStyle}>Remove selected items</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    color: 'red'
  }
};

const mapStateToProps = state => ({ todos: state });

export default connect(mapStateToProps)(Footer);
