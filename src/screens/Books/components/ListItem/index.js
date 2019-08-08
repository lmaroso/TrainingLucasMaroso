import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CardSection from '../../../../components/CardSection';

import styles from './styles';

const ListItem = ({ elem, onPress }) => {
  const { title, author, imageLink } = elem;
  return (
    <View>
      <CardSection>
        <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
          <View style={styles.thumbnailContainer}>
            <Image style={styles.thumbnail} source={{ uri: imageLink }} />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>{title}</Text>
            <Text>{author}</Text>
          </View>
        </TouchableOpacity>
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
  }),
  onPress: PropTypes.func.isRequired
};

export default ListItem;
