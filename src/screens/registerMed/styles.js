import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    fontSize: fonts.big,
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
    fontSize: fonts.bigger,
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
    //flex: 1,
    //flexDirection: 'row',
    //marginRight: 20,
    width: 150,
    height: 55,
  },
  cardPane: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 30,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },

  // Text
  text: {
    marginTop: 5,
    fontSize: fonts.big,
    fontWeight: fonts.semiBolt,
  },
});

export default styles;
