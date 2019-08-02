import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as todoActions } from '../../../../redux/todo/actions';
import DeleteSelectedButton from '../../../../components/DeleteSelectedButton';

import styles from './styles';

const Footer = ({ dispatchRemoveSelected }) => {
  return (
    <View style={styles.footer}>
      <DeleteSelectedButton onPress={dispatchRemoveSelected} title="Remove completed tasks" />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchRemoveSelected: () => dispatch(todoActions.removeSelected())
});

Footer.propTypes = {
  dispatchRemoveSelected: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Footer);
