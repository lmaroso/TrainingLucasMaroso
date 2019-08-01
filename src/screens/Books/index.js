/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';

import List from './components/List';
import ListItem from './components/ListItem';

class Books extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    // const { books } = this.state;
    try {
      const response = await axios.get(`https://private-69a0f-lucasmaroso.apiary-mock.com/books`);
      const json = await response.data;
      // const datos = json.data;
      this.setState({ json });
      console.log(this.state);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  renderBooks() {
    const { books } = this.state;

    return books.map(book => <ListItem key={book.title} book={book} />);
  }

  render() {
    // <Text>hello</Text>;
    return (
      <ScrollView>{this.renderBooks()}</ScrollView>
      /*
      <View>
        <List books={this.state} />
      </View>
      */
    );
  }
}

export default Books;

/*
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
*/
