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
    justifyContent: 'space-between',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: scaleFontSize(24),
    lineHeight: scaleSizeHeight(24),
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  headerVw: {
    // flex: 1,
    marginLeft: scaleSize(10),
  },
});
