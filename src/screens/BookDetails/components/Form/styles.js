import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#87ceeb',
    color: 'white',
    fontSize: 20,
    height: 50,
    width: 250,
    lineHeight: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  container: {
    padding: 10
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderColor: '#ddd',
    borderWidth: 1
  },
  text: {
    paddingBottom: 5,
    fontSize: 18
  },
  submitButton: {
    paddingBottom: 10
  }
});

export default styles;
