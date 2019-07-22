import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import CheckBox from '../CheckBox';
import { toggleSelect, removeTodo } from '../../Actions';
import { CardSection } from '../CardSection';

const ListItem = ({ todo, removeTodo, toggleSelect }) => {
  const { id, text, selected } = todo;
  return (
    <CardSection>
      <CheckBox selected />
      <Text style={styles.textStyle}>{text}</Text>
      <TouchableOpacity onPress={() => removeTodo(id)} style={{ marginRight: 10 }}>
        <Icon name="close" size={30} color="red" />
      </TouchableOpacity>
    </CardSection>
  );
};

const styles = {
  textStyle: {
    flex: 1,
    fontSize: 18
  }
};

/*const mapStateToProps = () => {

}*/

export default connect(
  null,
  { removeTodo, toggleSelect }
)(ListItem);
