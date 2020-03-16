import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
  },
  infoContainer: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
});

export default styles;
