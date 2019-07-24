import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DeleteButton from '../Buttons/DeleteButton';
import CheckBox from '../Buttons/CheckBox';
import { toggleSelect, removeTodo } from '../../Actions';
import { CardSection } from '../CardSection/Index';

import Styles from './Styles';

const ListItem = ({ todo, dispatchRemoveTodo, dispatchToggleSelect }) => {
  const { id, text, selected } = todo;
  const { textStyle } = Styles;
  return (
    <CardSection selected={selected}>
      <Text style={textStyle}>{text}</Text>
      <CheckBox onPress={() => dispatchToggleSelect(id)} selected={selected} />
      <DeleteButton onPress={() => dispatchRemoveTodo(id)} />
    </CardSection>
  );
};

ListItem.propTypes = {
  dispatchRemoveTodo: PropTypes.func,
  dispatchToggleSelect: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    selected: PropTypes.bool
  })
};

const mapDispatchToProps = dispatch => ({
  dispatchToggleSelect: id => dispatch(toggleSelect(id)),
  dispatchRemoveTodo: id => dispatch(removeTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
