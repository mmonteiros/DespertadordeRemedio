import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },

  // Safe Area
  safeArea: {
    minHeight: 8,
  },

  // Header Tittle
  headerCard: {
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  // Button next
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },

  // Cards
  cardMain: {
    borderRadius: 20,
  },
  cardContainer: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 30,
    marginBottom: 20,
  },
});

export default styles;
