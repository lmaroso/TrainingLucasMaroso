import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconButton from '../../../../components/IconButton';
import CheckBox from '../../../../components/CheckBox';
import { actionCreators as todoActions } from '../../../../redux/todo/actions';
import CardSection from '../../../../components/CardSection';

import styles from './styles';

const ListItem = ({ elem, dispatchRemoveTodo, dispatchToggleSelect }) => {
  const { id, text, selected } = elem;
  return (
    <CardSection selected={selected}>
      <Text style={styles.text}>{text}</Text>
      <CheckBox onPress={() => dispatchToggleSelect(id)} selected={selected} />
      <IconButton name="close" color="red" onPress={() => dispatchRemoveTodo(id)} />
    </CardSection>
  );
};

ListItem.propTypes = {
  dispatchRemoveTodo: PropTypes.func,
  dispatchToggleSelect: PropTypes.func,
  elem: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    selected: PropTypes.bool
  })
};

const mapDispatchToProps = dispatch => ({
  dispatchToggleSelect: id => dispatch(todoActions.toggleSelect(id)),
  dispatchRemoveTodo: id => dispatch(todoActions.removeTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
