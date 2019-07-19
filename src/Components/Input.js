import React from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../Actions';

import AddButton from './Buttons/AddButton';
import { CardSection } from './CardSection';

const Input = () => {
  return (
    <CardSection>
      <TextInput style={{ flex: 1 }} placeholder="Enter an Item!" />
      <AddButton onPress={addTodo} />
    </CardSection>
  );
};

const mapDispatchToProps = () => {
  
};

export default connect(
  addTodo,
  mapDispatchToProps
)(Input);
