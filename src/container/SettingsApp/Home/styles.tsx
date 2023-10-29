import {StyleSheet} from 'react-native';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';

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
    backgroundColor: 'white',
    borderRadius: scaleSize(10),
    borderColor: '#EEEEEE',
    borderWidth: scaleSize(1.5),
  },
});

export default styles;
