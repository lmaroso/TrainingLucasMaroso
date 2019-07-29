import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import CheckBox from '../CheckBox';
import { toggleSelect, removeTodo } from '../../Actions';
import { CardSection } from '../CardSection';

import styles from './styles';

const ListItem = ({ todo, dispatchRemoveTodo, dispatchToggleSelect }) => {
  const { id, text, selected } = todo;
  return (
    <CardSection selected={selected}>
      <Text style={styles.textStyle}>{text}</Text>
      <CheckBox onPress={() => dispatchToggleSelect(id)} selected={selected} />
      <IconButton name="close" color="red" onPress={() => dispatchRemoveTodo(id)} />
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
