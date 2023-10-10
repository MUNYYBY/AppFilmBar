import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../common/utils/ScaleSheetUtils';
import Colors from '../../common/styles/Colors';

const styles = StyleSheet.create({
  LoginContainer: {
    marginTop: scaleSize(150),
  },
  textMain: {
    fontSize: scaleFontSize(32),
    fontWeight: 'bold',
    color: Colors.BLACK_COLOR,
  },
  textSec: {
    fontSize: scaleSize(16),
  },
});
export default styles;
