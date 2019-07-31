/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View } from 'react-native';

import List from './components/List';

// eslint-disable-next-line react/prop-types
class Books extends Component {
  state = [
    {
      id: 1,
      image: '',
      title: 'unTitulo',
      author: 'otroAutor'
    },
    {
      id: 2,
      image: '',
      title: 'unTitulo',
      author: 'otroAutor'
    },
    {
      id: 3,
      image: '',
      title: 'unTitulo',
      author: 'otroAutor'
    },
    {
      id: 4,
      image: '',
      title: 'unTitulo',
      author: 'otroAutor'
    }
  ];

  render() {
    return (
      <View>
        <List books={this.state} />
      </View>
    );
  }
}

export default Books;
