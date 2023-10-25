import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  mainText: {
    fontSize: scaleFontSize(20),
    color: Colors.BLACK_COLOR,
    fontWeight: '500',
  },
  secText: {
    fontSize: scaleFontSize(16),
    color: Colors.BLACK_COLOR,
    opacity: 0.75,
  },
  devider: {
    backgroundColor: 'rgba(0,0,0,0.24)',
    height: 1,
    width: '100%',
    marginVertical: scaleSize(8.5),
  },
  contactcontainer: {
    backgroundColor: 'rgba(256,256,265,0.10)',
    width: '100%',
    borderRadius: scaleSize(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
