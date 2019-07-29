import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Input from '../Input';
import List from '../List';
import Footer from '../Footer';
import NavigationButton from '../NavigationButton';

import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewStyle}>
        <Input />
        <List />
        <Footer style={styles.footerStyle} />
        <NavigationButton title="Go to Test" onPress={() => navigation.navigate('test')} />
      </View>
    );
  }
}

Todo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default Todo;
