import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';

const styles = StyleSheet.create({
  mainText: {
    fontSize: scaleFontSize(18),
    color: Colors.BLACK_COLOR,
    fontWeight: '800',
  },
  secText: {
    fontSize: scaleFontSize(14),
    color: Colors.BLACK_COLOR,
    opacity: 0.75,
  },
  container: {
    backgroundColor: '#EEEEEE',
    marginHorizontal: scaleSize(-16),
    padding: scaleSize(16),
    width: '110%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: scaleSize(10.484),
    paddingVertical: scaleSize(20),
    marginBottom: scaleSize(10),
    borderBottomEndRadius: scaleSize(10),
    borderBottomStartRadius: scaleSize(10),
    backgroundColor: Colors.BLUE_COLOR,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: scaleSize(50),
    width: scaleSize(50),
    borderRadius: scaleSize(100),
    marginRight: scaleSize(15),
    marginLeft: scaleSize(10),
    borderColor: Colors.BLACK_COLOR,
  },
  scrollViewStyle: {
    width: '100%',
    marginBottom: 100,
  },
  lowerContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    marginTop: scaleSize(10),
    borderTopEndRadius: scaleSize(10),
    borderTopStartRadius: scaleSize(10),
    paddingVertical: scaleSize(15),
  },
  InputField: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(15),
    height: scaleSize(45),
    borderRadius: scaleSize(10),
    color: Colors.BLACK_COLOR,
  },
  recievedMessageContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: scaleSize(15),
    borderTopRightRadius: scaleFontSize(20),
    borderBottomRightRadius: scaleFontSize(20),
    borderBottomLeftRadius: scaleFontSize(20),
    width: scaleSize(230),
  },
  recievedMessageText: {
    fontSize: scaleFontSize(16),
    color: Colors.BLACK_COLOR,
  },
  sendMessageContainer: {
    padding: scaleSize(15),
    borderTopLeftRadius: scaleFontSize(20),
    borderBottomRightRadius: scaleFontSize(20),
    borderBottomLeftRadius: scaleFontSize(20),
    display: 'flex',
    alignItems: 'flex-end',
    width: scaleSize(230),
    backgroundColor: Colors.PRIMARY,
  },
  sendMessageText: {
    fontSize: scaleFontSize(16),
    color: Colors.BLACK_COLOR,
  },
  dateText: {
    fontSize: scaleFontSize(12),
    color: Colors.WHITE_COLOR,
    marginLeft: scaleSize(19),
    opacity: 0.5,
    marginTop: scaleSize(8),
  },
});
export default styles;
