import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardSection: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30
  }
});

export default styles;
