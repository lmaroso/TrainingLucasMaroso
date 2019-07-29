import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';

const List = ({ todos }) => {
  return (
    <FlatList
      keyExtractor={todo => todo.id}
      data={todos}
      renderItem={({ item }) => <ListItem todo={item} />}
    />
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      selected: PropTypes.bool
    })
  )
};

const mapStateToProps = state => ({ todos: state });

export default connect(mapStateToProps)(List);
