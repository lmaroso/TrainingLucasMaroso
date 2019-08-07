import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 400,
    backgroundColor: 'grey'
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
