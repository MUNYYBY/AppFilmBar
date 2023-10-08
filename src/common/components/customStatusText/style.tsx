import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
  welcomeBack: {
    fontFamily: 'Lato-Regular',
    // fontWeight: '500',
    fontSize: scaleFontSize(21),
    lineHeight: scaleFontSize(25),
    color: Colors.BLACK_COLOR,
    marginVertical: scaleFontSize(10),
  },
  rewardingText: {
    fontFamily: 'Lato-Regular',
    //  fontWeight: '300',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(25),
    color: Colors.BLACK_COLOR,
    marginBottom: scaleSize(10),
  },
});
