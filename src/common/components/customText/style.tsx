import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '@pigeonship/common/utils/ScaleSheetUtils';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  customText: {
    // fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleSizeHeight(23),
    fontFamily: 'Lato-Regular',
    marginBottom: scaleSize(2),
  },
});

export default styles;
