import React from 'react';
import { TextInput, View } from 'react-native';

import Actions from '../Actions';

class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter an Item!"
          onChangeText={val => addTodo({ text: val, selected: false })}
        />
      </View>
    );
  }
}

export default Input;
