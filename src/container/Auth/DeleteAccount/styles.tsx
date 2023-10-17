import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';

const styles = StyleSheet.create({
  LoginContainer: {
    marginTop: scaleSize(180),
  },
  textMain: {
    fontSize: scaleFontSize(32),
    fontWeight: 'bold',
  },
  textSec: {
    fontSize: scaleSize(16),
  },
  centerAlign: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
