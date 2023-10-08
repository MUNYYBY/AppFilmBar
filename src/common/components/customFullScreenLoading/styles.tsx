import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingConatiner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0, 0.45)',
    zIndex: 50,
  },
});
