import {StyleSheet} from 'react-native';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';

const styles = StyleSheet.create({
  BoldText: {
    fontSize: scaleSize(20),
    fontWeight: '500',
  },
  Container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    marginTop: scaleSize(30),
  },
  uploadContainer: {
    width: scaleSize(100),
    height: scaleSize(100),
    backgroundColor: '#EEEEEE',
    borderRadius: scaleSize(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoUploadContainer: {
    width: scaleSize(150),
    height: scaleSize(250),
    backgroundColor: '#EEEEEE',
    borderRadius: scaleSize(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scaleSize(1.25),
    borderColor: Colors.INPUT_BORDER,
  },
});

export default styles;
