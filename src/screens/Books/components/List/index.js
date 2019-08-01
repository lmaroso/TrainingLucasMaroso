import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';

// import { connect } from 'react-redux';

const List = ({ books }) => {
  
  return (
    <FlatList
      keyExtractor={book => book.title}
      data={books}
      renderItem={({ item }) => <ListItem book={item} />}
    />
  );
};

List.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      imageLink: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default List;
