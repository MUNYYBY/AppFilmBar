import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  textInputVw: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: scaleSize(10),
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: scaleSize(55),
    borderRadius: scaleSize(10),
    borderWidth: scaleSize(1.25),
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
    fontSize: scaleFontSize(14),
    fontFamily: 'Lato-Regular',
    backgroundColor: '#EEEEEE',
    paddingRight: scaleSize(70),
  },
  errorTxt: {
    color: Colors.ERROR_COLOR,
    fontSize: scaleFontSize(14),
    marginTop: scaleSize(1),
    fontFamily: 'Lato-Regular',
  },
  titleVw: {
    width: '85%',
    marginTop: scaleSize(4),
  },
  titleTxt: {
    fontSize: scaleFontSize(15),
    fontFamily: 'Lato-Regular',
  },
  container: {
    flexDirection: 'row',
    marginVertical: scaleSize(8),
    borderRadius: scaleSize(10),
  },
  leftAccessoriesVw: {
    alignSelf: 'center',
    width: scaleSize(25),
    position: 'absolute',
    zIndex: 9999,
    left: scaleSize(10),
  },
  leftAccessoriesImg: {
    height: scaleSize(16),
    width: scaleSize(18),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  successErrorIconVw: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: scaleSize(3),
    position: 'absolute',
    top: scaleSize(18),
    right: scaleSize(15),
  },

  mainVw: {
    marginVertical: scaleSize(11),
  },
  txtContainer: {
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: scaleSize(10),
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    borderWidth: scaleSize(1.25),
    borderColor: Colors.INPUT_BORDER,
  },
  codeTxt: {
    paddingLeft: scaleSize(10),
    fontSize: scaleFontSize(14),
    lineHeight: scaleSizeHeight(16.8),
    fontFamily: 'Lato-Regular',
  },
  txtInput: {
    fontSize: scaleFontSize(14),
    paddingHorizontal: scaleSize(10),
    height: scaleSize(55),
    flex: 1,
    fontFamily: 'Lato-Regular',
  },
  passwordIconView: {
    alignSelf: 'flex-end',
    marginVertical: scaleSize(15),
    width: scaleSize(25),
    position: 'absolute',
  },
  rightAccessoryImage: {
    height: scaleSize(25),
    width: scaleSize(22),
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: scaleSize(-13),
    left: scaleSize(-30),
  },
  rightAccessoryView: {
    alignSelf: 'center',
    flex: 1,
    width: scaleSize(22),
  },
  errorView: {
    alignSelf: 'flex-start',
    marginLeft: scaleSize(16),
  },
});

export default styles;
