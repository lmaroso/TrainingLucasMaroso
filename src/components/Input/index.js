import React, { Component } from 'react';
import { TextInput, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as todoActions } from '../../redux/todo/actions';
import IconButton from '../IconButton';
import { CardSection } from '../CardSection';

import styles from './styles';

const { addTodo } = todoActions;

class Input extends Component {
  state = { text: '' };

  handleAdd = () => {
    const { addTodo } = this.props;
    const { text } = this.state;
    addTodo(text);
    this.setState({ text: '' });
    Keyboard.dismiss();
  };

  handleChangeText = text => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;

    return (
      <CardSection>
        <TextInput
          onSubmitEditing={this.handleAdd}
          style={styles.textInput}
          placeholder="Enter an Item!"
          value={text}
          onChangeText={this.handleChangeText}
        />
        <IconButton name="add" color="black" onPress={this.handleAdd} />
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
