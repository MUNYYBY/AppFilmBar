import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import {scaleSize} from '../../utils/ScaleSheetUtils';
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
