import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '../../utils/ScaleSheetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: Colors.YELLOW_COLOR,
    paddingVertical: scaleSize(15),
    borderRadius: scaleSize(60),
    alignItems: 'center',
  },
  btnTxt: {
    //fontWeight: '500',
    color: Colors.BLACK_COLOR,
    fontSize: scaleFontSize(16),
    lineHeight: scaleSizeHeight(19),
    fontFamily: 'Lato-Regular',
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
