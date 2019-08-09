import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import CardSection from '../../../../components/CardSection';

import styles from './styles';

const submit = values => {
  console.log('submit');
};

const renderInput = props => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.input.onChange}
      numberOfLines={props.numberOfLines}
      placeholder={props.placeholder}
    />
  );
};

const Form = props => {
  const { handleSubmit } = props;
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Name:</Text>
        <Field name="name" component={renderInput} placeholder="Alexa Bines" />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Email:</Text>
        <Field name="email" component={renderInput} placeholder="example@domain.com" />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Comment:</Text>
        <Field
          name="comment"
          component={renderInput}
          numberOfLines={3}
          placeholder={'Enter your comment here...'}
        />
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity onPress={handleSubmit(submit)}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export default Form;
export default reduxForm({
  form: 'comment'
})(Form);
