import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  mainText: {
    fontSize: scaleFontSize(18),
    color: Colors.BLACK_COLOR,
    fontWeight: '400',
  },
  secText: {
    fontSize: scaleFontSize(16),
    color: Colors.BLACK_COLOR,
    opacity: 0.75,
  },
  devider: {
    backgroundColor: 'rgba(0,0,0,0.065)',
    height: 1,
    width: '100%',
    marginVertical: scaleSize(15),
  },
  contactcontainer: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    borderRadius: scaleSize(10),
    paddingVertical: scaleSize(20),
    paddingHorizontal: scaleSize(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleSize(10),
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: scaleSize(55),
    width: scaleSize(55),
    borderRadius: scaleSize(100),
    marginRight: scaleSize(15),
    borderColor: Colors.BLACK_COLOR,
  },
});
export default styles;
