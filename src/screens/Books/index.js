import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { actionCreators as bookActions } from '../../redux/books/actions';
import ErrorModal from '../../components/ErrorModal';
import Button from '../../components/Button';

import ListItem from './components/ListItem';
import styles from './styles';

class Books extends Component {
  componentDidMount() {
    this.loadContent();
  }

  async loadContent() {
    const { dispatchFailure, dispatchSuccess, dispatchCleanFields } = this.props;
    dispatchCleanFields();
    try {
      const response = await axios.get(`https://private-69a0f-lucasmaroso.apiary-mock.com/books`);
      const json = response.data;
      dispatchSuccess(json);
    } catch (error) {
      dispatchFailure(error.message);
    }
  }

  renderItem = ({ item }) => <ListItem elem={item} />;

  render() {
    const { isLoading, books, error } = this.props;
    if (error !== null) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>Error while loading books. Please, reload.</Text>
          <View style={styles.errorButton}>
            <Button onPress={() => this.loadContent()}>Refresh</Button>
          </View>
          <ErrorModal error={error} />
        </View>
      );
    }
    return (
      <View style={styles.textButtonView}>
        <FlatList
          keyExtractor={book => book.id}
          data={books}
          renderItem={item => this.renderItem(item)}
          onRefresh={() => this.loadContent()}
          refreshing={isLoading}
        />
      </View>
    );
  }
}

Books.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      imageLink: PropTypes.string,
      link: PropTypes.string
    })
  ),
  dispatchFailure: PropTypes.func,
  dispatchSuccess: PropTypes.func,
  dispatchCleanFields: PropTypes.func
};

const mapStateToProps = ({ books: { isLoading, error, books } }) => ({ isLoading, error, books });

const mapDispatchToProps = dispatch => ({
  dispatchSuccess: data => dispatch(bookActions.success(data)),
  dispatchFailure: error => dispatch(bookActions.failure(error)),
  dispatchCleanFields: () => dispatch(bookActions.cleanFields())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
