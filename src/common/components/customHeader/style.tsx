import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../../utils/ScaleSheetUtils';

export const styles = StyleSheet.create({
  img: {height: scaleSizeHeight(15), width: scaleSizeWidth(15)},
  mainVw: {
    flexDirection: 'row',
    paddingVertical: scaleSize(17),
    // paddingHorizontal: scaleSize(15),
    alignItems: 'center',
  },
  headerTxt: {
    // fontWeight: '400',
    fontSize: scaleFontSize(20),
    lineHeight: scaleSizeHeight(24),
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  headerVw: {
    flex: 1,
  },
});
