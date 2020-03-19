import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 18,
    marginTop: 20,
    marginBottom: 30,
    height: 125,
    width: 410,
  },

  image: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    width: 115,
    height: 115,
  },

  divider: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  // Info
  infoContainer: {
    flex: 1,
    paddingTop: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.bigger24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: fonts.semiBolt,
    marginLeft: 5,
  },
});

export default styles;
