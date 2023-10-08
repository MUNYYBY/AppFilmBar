import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../../utils/ScaleSheetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Fonts} from '../../../styles/Fonts';

const styles = StyleSheet.create({
  indicatorStyle: {
    borderBottomWidth: scaleSize(0.6),
    borderBottomColor: 'rgba(201, 201, 201, 0.5)',
  },
  actionContainer: {
    width: '100%',
    paddingBottom: scaleSize(70),
  },
  indicatorSheetStyle: {
    width: 0,
    height: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    marginTop: -5,
  },
  modalHeader: {
    height: scaleSize(70),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.CARD_BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseFilterHeading: {
    color: Colors.CARD_TEXT_COLOR,
    fontSize: scaleFontSize(Fonts.SWITCH_TEXT),
    textAlign: 'center',
  },
  cancelImage: {height: scaleSize(15), width: scaleSize(15)},
  cancelImageView: {
    position: 'absolute',
    padding: scaleSize(10),
    right: scaleSize(15),
  },
  cardVw: {
    marginHorizontal: scaleSize(20),
    borderRadius: scaleSize(10),
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowRadius: scaleSize(9),
    shadowOpacity: 0.2,
    elevation: 3,
    paddingVertical: scaleSize(15),
    paddingHorizontal: scaleSize(10),
    borderColor: Colors.GRAY_BACKGROUND_COLOR,
    borderWidth: scaleSize(2),
    marginTop: scaleSize(22),
  },
  cardHeaderVw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: scaleFontSize(Fonts.SWITCH_TEXT),
    color: Colors.CARD_TEXT_COLOR,
  },
  filterView: {
    height: scaleSize(20),
    width: scaleSize(20),
    borderColor: Colors.LINE_SEPARATOR_BLUE_COLOR,
    borderWidth: scaleSize(3),
    borderRadius: scaleSize(10),
    padding: scaleSize(3),
    backgroundColor: 'transparent',
    marginHorizontal: scaleSize(10),
  },
  selectedItemView: {
    backgroundColor: Colors.LINE_SEPARATOR_BLUE_COLOR,
    borderRadius: scaleSize(10),
    flexGrow: 1,
  },
});

export default styles;
