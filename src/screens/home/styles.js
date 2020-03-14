import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  safeArea: {
    minHeight: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default styles;
