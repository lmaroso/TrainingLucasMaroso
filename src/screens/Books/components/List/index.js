/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';

import { CardSection } from '../../../../components/CardSection';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const List = ({ books }) => {
  return (
    <FlatList
      keyExtractor={book => book.id}
      data={books}
      renderItem={({ item }) => <ListItem book={item} />}
    />
  );
};

const ListItem = ({ book }) => {
  const { title, author } = book;

  return (
    <View>
      <Image
        style={{
          height: 100,
          width: 100
        }}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png' }}
      />
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};
export default List;
