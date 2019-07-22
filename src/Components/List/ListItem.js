import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { toggleSelect, removeTodo } from '../../Actions';
import { CardSection } from '../CardSection';

const ListItem = ({ todo, removeTodo, toggleSelect }) => {
  const { id, text, selected } = todo;

  return (
    <CardSection>
      <Text style={{ flex: 1 }}>{text}</Text>
      <CheckBox checked={selected} onPress={() => toggleSelect(id)} />
      <TouchableOpacity onPress={() => removeTodo(id)}>
        <Icon name="remove" size={30} color="black" />
      </TouchableOpacity>
    </CardSection>
  );
};

export default connect(
  null,
  { removeTodo, toggleSelect }
)(ListItem);
