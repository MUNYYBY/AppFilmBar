import {StyleSheet} from 'react-native';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';

const styles = StyleSheet.create({
  headerContent: {
    marginTop: scaleSize(50),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskPlaceHolder: {
    marginTop: scaleSize(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleSize(20),
    paddingHorizontal: scaleSize(15),
    backgroundColor: '#EEEEEE',
    borderRadius: scaleSize(10),
    borderColor: Colors.INPUT_BORDER,
    borderWidth: scaleSize(1),
  },
});

export default styles;
