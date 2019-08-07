import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spinnerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButtonView: {
    flex: 1
  },
  textButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  errorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    paddingBottom: 15
  },
  errorButton: {
    width: '75%',
    height: 45
  }
});

export default styles;
