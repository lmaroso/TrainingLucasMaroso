import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  uncheckedCheckBox: {
    width: 30,
    height: 30,
    borderColor: '#000',
    borderRadius: 2,
    borderWidth: 2,
    marginRight: 10,
    padding: 3,
    backgroundColor: '#FFF'
  },
  checkedCheckBox: {
    borderColor: '#000',
    flex: 1,
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: '#000'
  }
});

export default styles;
