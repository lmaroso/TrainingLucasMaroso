import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnail: {
    height: 80,
    width: 80,
    borderRadius: 400
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: 500,
    width: 500
  }
});

export default styles;
