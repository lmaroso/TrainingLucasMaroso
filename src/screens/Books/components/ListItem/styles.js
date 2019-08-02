import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 83,
    width: 83
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: 300,
    flex: 1,
    width: 300
  }
});

export default styles;
