import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 30,
    height: 55,
    width: 150,
  },
  text: {
    color: '#8F9BB3',
    fontSize: fonts.regular,
  },
});

export default styles;
