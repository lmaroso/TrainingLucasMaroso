import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Field, reduxForm, destroy } from 'redux-form';

import styles from './styles';

class Form extends Component {
  renderInput = props => {
    return (
      <TextInput
        value={props.input.value}
        style={styles.input}
        onChangeText={props.input.onChange}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
      />
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Name:</Text>
          <Field name="name" component={this.renderInput} placeholder="Alexa Bines" />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Email:</Text>
          <Field name="email" component={this.renderInput} placeholder="example@domain.com" />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Comment:</Text>
          <Field
            name="comment"
            component={this.renderInput}
            numberOfLines={3}
            placeholder="Enter your comment here..."
          />
        </View>
        <View style={styles.submitButton}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(destroy('comment'));
};

export default reduxForm({
  form: 'comment',
  onSubmitSuccess: afterSubmit
})(Form);
