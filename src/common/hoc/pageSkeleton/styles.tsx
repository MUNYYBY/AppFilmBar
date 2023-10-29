import {StyleSheet, Platform} from 'react-native';
import Colors from '../../styles/Colors';
import {scaleSize} from '../../utils/ScaleSheetUtils';
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    marginHorizontal: scaleSize(16),
    marginTop: Platform.OS !== 'ios' ? scaleSize(35) : 0,
  },
  childrenView: {
    flex: 1,
  },
});
export default styles;
