<<<<<<< HEAD
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
    borderRadius: 14,
  },
  cardContainer: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 30,
    marginBottom: 20,
  },
  cardContent: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 25,
    width: 120,
  },
  cardPane: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 30,
    //flexDirection: 'row',
  },
});

export default styles;
=======
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
>>>>>>> parent of 4f50b44... Update for registerMed
