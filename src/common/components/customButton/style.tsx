import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  btnViewSec: {
    backgroundColor: Colors.GREEN_COLOR,
    paddingVertical: scaleSize(5),
    borderRadius: scaleSize(60),
    alignItems: 'center',
    minWidth: scaleSize(100),
  },
  btnView: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: scaleSize(15),
    borderRadius: scaleSize(60),
    alignItems: 'center',
  },
  btnTxt: {
    color: Colors.BLACK_COLOR,
    fontSize: scaleFontSize(17),
    lineHeight: scaleSizeHeight(19),
    fontWeight: '500',
  },
  btnTxtSec: {
    color: Colors.WHITE_COLOR,
    fontSize: scaleFontSize(16),
    lineHeight: scaleSizeHeight(19),
    fontWeight: '500',
  },
  disabledBtnView: {
    backgroundColor: Colors.CARD_BACKGROUND,
  },
  disabledBtnTxt: {
    color: Colors.BLACK_COLOR,
    opacity: 0.5,
  },
});

export default styles;
