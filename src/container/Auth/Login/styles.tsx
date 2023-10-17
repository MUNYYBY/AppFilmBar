import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';

const styles = StyleSheet.create({
  LoginContainer: {
    marginTop: scaleSize(180),
  },
  textMain: {
    fontSize: scaleFontSize(32),
    fontWeight: 'bold',
    color: Colors.BLACK_COLOR,
  },
  textSec: {
    fontSize: scaleSize(16),
  },
  centerAlign: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
