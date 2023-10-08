import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
  container: {width: '100%', backgroundColor: 'transparent'},
  mainVw: {
    marginHorizontal: scaleSize(17),
    marginVertical: scaleSize(11),
  },
  codeTxt: {
    // fontWeight: '400',
    fontSize: scaleFontSize(14),
    lineHeight: scaleSizeHeight(16.8),
  },
  txtContainer: {
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: scaleSize(60),
    padding: scaleSize(15),
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  image: {
    height: scaleSize(40),
    width: scaleSize(40),
    marginRight: scaleSize(10),
  },
  imageDown: {
    height: scaleSize(15),
    width: scaleSize(15),
  },
  flagBtn: {
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: scaleSize(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSize(6),
    paddingHorizontal: scaleSize(15),
  },
  txtInput: {paddingHorizontal: scaleSize(10), flex: 1},
});
