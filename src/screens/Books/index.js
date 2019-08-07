import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { actionCreators as bookActions } from '../../redux/books/actions';
import { Spinner } from '../../components/Spinner';
import { ErrorModal } from '../../components/ErrorModal';
import TextButton from '../../components/TextButton';
import List from '../../components/List';

import ListItem from './components/ListItem';
import styles from './styles';

class Books extends Component {
  async componentDidMount() {
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

  render() {
    const { isLoading, books, error } = this.props;
    if (isLoading) {
      return (
        <View style={styles.spinnerView}>
          <Spinner size={75} />
        </View>
      );
    }
    if (error !== null) {
      return <ErrorModal error={error} />;
    }
    return (
      <View style={styles.textButtonView}>
        <List elems={books} render={({ item }) => <ListItem elem={item} />} />
        <TextButton onPress={() => this.loadContent()} title="Refresh" style={styles.textButton} />
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
