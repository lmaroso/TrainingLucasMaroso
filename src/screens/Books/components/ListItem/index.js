import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from '../../../../components/CardSection';

import styles from './styles';

const ListItem = ({ elem }) => {
  const { title, author, imageLink } = elem;

  return (
    <View>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{ uri: imageLink }} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{author}</Text>
        </View>
      </CardSection>
    </View>
  );
};

ListItem.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    imageLink: PropTypes.string,
    link: PropTypes.string
  })
};

export default ListItem;
