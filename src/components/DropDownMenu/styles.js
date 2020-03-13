import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    //width: ${props => (props.type === "instructions" ? 300 : 150)},
    backgroundColor: colors.grayBackground,
    borderColor: colors.white,
    borderRadius: 30,
    height: 55,
    width: 150,
  },
});

export default styles;
