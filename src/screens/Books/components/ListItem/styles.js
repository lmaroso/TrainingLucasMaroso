import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  headerText: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 400,
    backgroundColor: 'grey'
  },
  thumbnailContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: 500,
    width: 500
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

export default styles;
