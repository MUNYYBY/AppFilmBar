import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  img: {
    width: scaleSize(15),
    height: scaleSize(15),
    marginLeft: scaleSize(5),
  },
  error: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    // borderWidth: 1,
    flexWrap: 'wrap',
  },
  errorText: {
    color: Colors.GRAY_TEXT_COLOR,
    fontSize: scaleFontSize(14),
    fontFamily: 'Lato-Regular',
    // fontWeight: '400',
    marginRight: scaleSize(3),
  },
});
