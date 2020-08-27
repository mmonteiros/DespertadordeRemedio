import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 30,
        height: 55,
        width: 150,
      },

      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.transparentLow,
      },
    
      modalView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
        width: "60%",
      },

      button: {
        borderRadius: 0,
        borderWidth: 0,
        height: "15%",
        width: "100%",
      }
    
})

export default styles;