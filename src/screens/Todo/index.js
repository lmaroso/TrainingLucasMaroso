import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../../components/Input';
import List from '../../components/List';
import { actionCreators as todoActions } from '../../redux/todo/actions';
import TextButton from '../../components/TextButton';

import ListItem from './components/ListItem';
import styles from './styles';

const Todo = ({ todos, dispatchRemoveSelected }) => {
  return (
    <View style={styles.view}>
      <Input />
      <List elems={todos} render={({ item }) => <ListItem elem={item} />} />
      <TextButton
        onPress={() => dispatchRemoveSelected()}
        title="Remove completed tasks"
        style={styles.textButton}
      />
    </View>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      selected: PropTypes.bool
    })
  ),
  dispatchRemoveSelected: PropTypes.func
};

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  dispatchRemoveSelected: () => dispatch(todoActions.removeSelected())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
