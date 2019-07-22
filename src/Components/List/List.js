import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const List = ({ todos }) => {
  return (
    <FlatList
      keyExtractor={todo => todo.id}
      data={todos}
      renderItem={({ item }) => <ListItem todo={item} />}
    />
  );
};

const mapStateToProps = state => ({ todos: state });

export default connect(mapStateToProps)(List);
