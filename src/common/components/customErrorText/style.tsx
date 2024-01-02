import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

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
    color: Colors.ERROR_CHECK_ICON,
    fontSize: scaleFontSize(14),
    fontFamily: 'Lato-Regular',
    // fontWeight: '400',
    marginRight: scaleSize(3),
  },
});
