import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';

const List = ({ elems }) => {
  return (
    <FlatList
      keyExtractor={elem => elem.id}
      data={elems}
      renderItem={({ item }) => <ListItem elem={item} />}
    />
  );
};

List.propTypes = {
  elems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      imageLink: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default List;
