import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column'
  },
  image: {
    height: 250,
    width: 170,
    alignSelf: 'center',
    backgroundColor: 'grey'
  },
  imageView: {
    paddingTop: 10,
    paddingBottom: 10
  },
  author: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20
  },
  description: {
    fontSize: 18
  },
  textView: {
    padding: 10
  }
});

export default styles;
