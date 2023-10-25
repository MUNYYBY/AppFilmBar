import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  headerContent: {
    paddingTop: scaleSize(50),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTextNonHeader: {
    fontSize: scaleFontSize(20),
    color: Colors.WHITE_COLOR,
    fontWeight: '800',
  },
  secTextNonHeader: {
    fontSize: scaleFontSize(16),
    color: Colors.WHITE_COLOR,
    opacity: 0.75,
  },
  //Non-header
  secContainer: {
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(20),
    backgroundColor: Colors.BACKGROUND,
  },
  scrollContainer: {
    marginTop: scaleSize(-12),
    // height: '100%',
    marginHorizontal: scaleSize(-16),
    marginBottom: scaleSize(150),
  },
  messagesStack: {
    marginTop: scaleSize(20),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: Colors.BLACK_COLOR,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(2.5),
    borderRadius: scaleSize(10),
    marginTop: scaleSize(10),
  },
  HeaderSearchInput: {
    color: Colors.WHITE_COLOR,
    backgroundColor: Colors.BLACK_COLOR,
  },
  sendButton: {
    height: scaleSize(35),
    width: scaleSize(35),
    borderRadius: scaleSize(50),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
