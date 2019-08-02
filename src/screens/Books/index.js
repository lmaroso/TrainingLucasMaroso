/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';

import ListItem from './components/ListItem';

class Books extends Component {
  state = {};

  async componentDidMount() {
    try {
      const response = await axios.get(`https://private-69a0f-lucasmaroso.apiary-mock.com/books`);
      const json = response.data;
      this.setState({ json });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  renderBooks() {
    const { json } = this.state;
    if (json === undefined) {
      return <Text>Cargando...</Text>;
    }
    return json.map(book => <ListItem key={book.title} book={book} />);
  }

  render() {
    return <ScrollView>{this.renderBooks()}</ScrollView>;
  }
}

export default Books;
