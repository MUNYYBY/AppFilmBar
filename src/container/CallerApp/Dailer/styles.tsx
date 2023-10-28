import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';

export const styles = StyleSheet.create({
  mainText: {
    fontSize: scaleFontSize(22),
    color: Colors.BLACK_COLOR,
    fontWeight: '600',
  },
  secText: {
    fontSize: scaleFontSize(14),
    color: Colors.BLACK_COLOR,
    opacity: 0.55,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSize(20),
    width: '100%',
  },
  stack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scaleSize(40),
    marginVertical: scaleSize(10),
  },
  dailerItem: {
    width: scaleSize(75),
    height: scaleSize(75),
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: Colors.WHITE_COLOR,
    shadowRadius: scaleSize(9),
    shadowOpacity: 0.2,
    elevation: 8,
    borderRadius: scaleSize(100),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
