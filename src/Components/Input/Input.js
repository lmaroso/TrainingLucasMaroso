import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo } from '../../Actions';
import AddButton from '../Buttons/AddButton';
import { CardSection } from '../CardSection/Index';

import Styles from './Styles';

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
    const { textInputStyle } = Styles;

    return (
      <CardSection>
        <TextInput
          onSubmitEditing={this.handleAdd}
          style={textInputStyle}
          placeholder="Enter an Item!"
          value={text}
          onChangeText={text => this.setState({ text })}
        />
        <AddButton onPress={this.handleAdd} />
      </CardSection>
    );
  }
}

Input.propTypes = {
  addTodo: PropTypes.func
};

export default connect(
  null,
  { addTodo }
)(Input);
