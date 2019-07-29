import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeSelected } from '../../Actions';
import DeleteSelectedButton from '../DeleteSelectedButton';

import styles from './styles';

const Footer = ({ dispatchRemoveSelected }) => {
  return (
    <View style={styles.footerStyle}>
      <DeleteSelectedButton onPress={dispatchRemoveSelected} />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchRemoveSelected: () => dispatch(removeSelected())
});

Footer.propTypes = {
  dispatchRemoveSelected: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Footer);
