import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class BookDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.bookTitle : 'Unknown'
    };
  };

  render() {
    const { navigation } = this.props;
    const { author, imageLink, description } = navigation.getParam('book');
    return (
      <View style={styles.view}>
        <ScrollView style={{ height: '100%' }}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{ uri: imageLink }} resizeMode="contain" />
          </View>
          <View style={styles.textView}>
            <Text style={styles.author}>{author || 'Unknown'}</Text>
            <Text style={styles.description}>{description || 'Unknown'}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

BookDetails.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        book: PropTypes.shape({
          title: PropTypes.string,
          author: PropTypes.string,
          imageLink: PropTypes.string,
          description: PropTypes.string
        })
      })
    })
  })
};

export default BookDetails;
