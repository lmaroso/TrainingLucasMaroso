import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../Actions';

import AddButton from './Buttons/AddButton';
import { CardSection } from './CardSection';

class Input extends Component {
  state = { text: '' };

  handleAdd = () => {
    const { addTodo } = this.props;
    const { text } = this.state;
    addTodo(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <CardSection>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter an Item!"
          value={text}
          onChangeText={text => this.setState({ text })}
        />
        <AddButton onPress={this.handleAdd} />
      </CardSection>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(Input);
