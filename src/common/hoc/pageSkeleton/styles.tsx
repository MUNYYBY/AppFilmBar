import Colors from '@pigeonship/common/styles/Colors';
import {scaleSize} from '@pigeonship/common/utils/ScaleSheetUtils';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    marginHorizontal: scaleSize(16),
  },
  childrenView: {
    flex: 1,
  },
});
export default styles;
