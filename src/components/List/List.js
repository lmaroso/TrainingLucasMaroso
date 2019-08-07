import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

const List = ({ elems, render }) => {
  return <FlatList keyExtractor={elem => elem.id} data={elems} renderItem={render} />;
};

List.propTypes = {
  elems: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        imageLink: PropTypes.string,
        link: PropTypes.string
      }),
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        selected: PropTypes.bool
      })
    ])
  ),
  render: PropTypes.func
};

export default List;
