import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CheckBox from '../CheckBox';
import { toggleSelect, removeTodo } from '../../Actions';
import { CardSection } from '../CardSection';

const ListItem = ({ todo, removeTodo, toggleSelect }) => {
  const { id, text, selected } = todo;
  return (
    <CardSection text={text} selected={selected}>
      <Text style={styles.textStyle}>{text}</Text>
      <CheckBox onPress={() => toggleSelect(id)} selected={selected} />
      <TouchableOpacity onPress={() => removeTodo(id)} style={{ marginRight: 10 }}>
        <Icon name="close" size={30} color="red" />
      </TouchableOpacity>
    </CardSection>
  );
};

const styles = {
  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 15
  }
};
/*
ListItem.propTypes = {
  removeTodo: PropTypes.func,
  toggleSelect: PropTypes.func,
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      selected: PropTypes.bool
    })
  )
};*/

const mapDispatchToProps = dispatch => ({
  toggleSelect: id => dispatch(toggleSelect(id)),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
