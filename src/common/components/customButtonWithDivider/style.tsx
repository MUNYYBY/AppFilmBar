import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '../../utils/ScaleSheetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  dividerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scaleSize(10),
    // marginHorizontal: scaleSize(17),
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    marginVertical: 20,
    height: scaleSizeHeight(0.7),
    backgroundColor: Colors.BLACK_COLOR,
  },
  dividerText: {
    // fontWeight: '400',
    textAlign: 'center',
    lineHeight: scaleSizeHeight(21),
    fontSize: scaleFontSize(14),
    marginHorizontal: scaleSize(11),
    color: Colors.GRAY_TEXT_COLOR,
    fontFamily: 'Lato-Regular',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.CARD_BACKGROUND,
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(12),
    borderRadius: scaleSize(60),
  },
  buttonText: {
    fontSize: scaleFontSize(12),
    // fontWeight: '500',
    lineHeight: scaleFontSize(14),
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    color: Colors.BLACK_COLOR,
  },
});

export default styles;
