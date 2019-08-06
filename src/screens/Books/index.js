import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { actionCreators as bookActions } from '../../redux/books/actions';
import { Spinner } from '../../components/Spinner';

import List from './components/List';

class Books extends Component {
  async componentDidMount() {
    const { dispatchFailure, dispatchSuccess, dispatchCleanBooks } = this.props;
    dispatchCleanBooks();
    try {
      const response = await axios.get(`https://private-69a0f-lucasmaroso.apiary-mock.com/books`);
      const json = response.data;
      dispatchSuccess(json);
    } catch (error) {
      dispatchFailure(error);
    }
  }

  render() {
    const { isLoading, books } = this.props;
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner size="large" />
        </View>
      );
    }
    return <List elems={books} />;
  }
}

const mapStateToProps = ({ books: { books, isLoading } }) => ({ books, isLoading });

const mapDispatchToProps = dispatch => ({
  dispatchSuccess: data => dispatch(bookActions.success(data)),
  dispatchFailure: error => dispatch(bookActions.failure(error)),
  dispatchCleanBooks: () => dispatch(bookActions.cleanBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
