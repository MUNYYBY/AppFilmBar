import {StyleSheet} from 'react-native';
import {scaleSize} from '../../common/utils/ScaleSheetUtils';
import Colors from '../../common/styles/Colors';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  safeAreaViewContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  dateAndTimeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontWeight: '700',
    fontSize: scaleSize(50),
    color: Colors.WHITE_COLOR,
  },
  appIcon: {
    height: scaleSize(60),
    width: scaleSize(60),
    resizeMode: 'contain',
  },
  iconsStacks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: scaleSize(20),
  },
});

export default styles;
