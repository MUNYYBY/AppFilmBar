import NetInfo from '@react-native-community/netinfo';
import {showAlert, showToast} from './AlertUtils';
export class InternetCheckUtils {
  // internet connection Response data
  isConnectedToNetwork = true;
  unsubscribe: any = null;
  /*
   * subscriber for internet status event
   */
  subscribeInternetConnectionEvt = () => {
    if (this.unsubscribe == null) {
      this.unsubscribe = NetInfo.addEventListener(networkState => {
        if (
          networkState.isConnected != null &&
          networkState.isInternetReachable != this.isConnectedToNetwork
        ) {
          console.log(networkState.isInternetReachable);
          this.isConnectedToNetwork = networkState.isInternetReachable!;
          let connectionMsg = this.isConnectedToNetwork
            ? 'Internet Restored!'
            : 'Internet Connection not available';
          this.isConnectedToNetwork
            ? showToast(connectionMsg)
            : showAlert(
                'Internet Connectivity',
                'You are not connected to any network or your network is week. Kindly connected to a strong connection!',
                'Cancel',
                'Ok',
                () => {},
              );
        }
      });
    }
  };
}
