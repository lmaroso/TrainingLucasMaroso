import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as todoActions } from '../../redux/todo/actions';
import TextButton from '../../components/TextButton';

import Input from './components/Input';
import ListItem from './components/ListItem';
import styles from './styles';

class Todo extends Component {
  renderItem = ({ item }) => {
    return <ListItem elem={item} />;
  };

  render() {
    const { todos, dispatchRemoveSelected } = this.props;
    return (
      <View style={styles.view}>
        <Input />
        <FlatList keyExtractor={todo => todo.id} data={todos} renderItem={item => this.renderItem(item)} />
        <TextButton
          onPress={() => dispatchRemoveSelected()}
          title="Remove completed tasks"
          style={styles.textButton}
        />
      </View>
    );
  }
}

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
