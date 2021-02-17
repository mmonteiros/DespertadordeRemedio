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
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  // Button
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
  buttonRadius: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    borderRadius: 50,
    height: 60,
    width: 60,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonMargin: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  // Cards
  cardMain: {
    borderRadius: 14,
    marginTop: 30,
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 30,
    marginBottom: 20,
    width: 280,
  },
  cardContent: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 25,
    width: 150,
    height: 55,
  },

  // Panes
  paneContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paneBorder: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },

  // Instructions
  instruction: {
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 30,
    height: 55,
    width: 300,
  },

  // Text
  text: {
    marginTop: 5,
    fontSize: fonts.big,
    fontWeight: fonts.semiBolt,
  },
  titlePaneBorder: {
    backgroundColor: colors.white,
    paddingRight: 5,
    paddingLeft: 5,
    position: 'absolute',
    top: -15,
    left: 50,
  },

  btnSection: {
    width: 70,
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    marginTop: 10,
  },
  cardBorder: {
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
