import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    minHeight: 8,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default styles;
