import React, { Component } from 'react';
import { Text } from 'react-native';

import List from './components/List';

class Books extends Component {
  render() {
    const { json } = this.state;
    if (json === undefined) {
      return <Text>Cargando...</Text>;
    }
    return <List elems={json} />;
  }
}

export default Books;
