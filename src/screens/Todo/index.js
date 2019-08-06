import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import List from '../../components/List';

import Footer from './components/Footer';
import styles from './styles';

const Todo = ({ todos }) => {
  return (
    <View style={styles.view}>
      <Input />
      <List elems={todos} />
      <Footer style={styles.footer} />
    </View>
  );
};

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps)(Todo);
