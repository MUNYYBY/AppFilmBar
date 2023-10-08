import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
  rightCheck: {
    width: scaleSize(15),
    height: undefined,
    aspectRatio: 1,
    marginRight: scaleSize(3),
  },
  rightClick_Vw: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(15),
    flex: 1,
  },
  info: {
    fontFamily: 'Lato-Regular',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
    color: Colors.BLACK_COLOR,
    marginLeft: scaleFontSize(15),
    marginHorizontal: scaleSize(20),
  },
});
