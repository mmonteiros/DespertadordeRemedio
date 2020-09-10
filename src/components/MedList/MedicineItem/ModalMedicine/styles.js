import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../styles';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#4E4E4E',
  },

  touchableOpacity: {
    flexDirection: 'row',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    marginTop: 20,
    marginBottom: 30,
  },

  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    height: 125,
    width: "100%",
  },

  colorMedicine: {
    backgroundColor: '#546de5',
    height: '100%',
    width: 15,
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
    paddingTop: 5,
    fontSize: fonts.bigger24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 6,
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

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparentLow,
    //marginTop: 20,
  },
  modalView: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    width: '100%',
  },

  imageModal: {
    width: 163,
    height: 163,
    marginTop: 10,
    marginLeft: 5,
  },
  contentContainerModal: {
    flex: 1,
  },
  iconContainer: {
    marginTop: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleModal: {
    fontSize: fonts.bigger24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  infoContainerModal: {
    paddingTop: 25,
    paddingLeft: 10,
  },
  textModalBtt: {
    fontSize: fonts.regular,
    fontWeight: fonts.semiBolt,
    marginTop: 2,
  },

  // Button
  buttonCantainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  buttonRadius: {
    backgroundColor: colors.transparent,
    borderColor: colors.gray,
    borderRadius: 50,
    height: 67,
    width: 67,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonRadiusYellow: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    borderRadius: 50,
    height: 67,
    width: 67,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

export default styles;
