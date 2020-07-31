import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 3,
        marginBottom: 25,
        height: 30,
        width: 70,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,

      },

      content: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.gray,
      },

      contentNextHour: {
        backgroundColor: colors.yellow,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        fontSize: 22,
        fontWeight: "bold",

        height: 35,
        width: 75,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
      },
});

export default styles;
