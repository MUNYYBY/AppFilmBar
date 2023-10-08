import {Alert} from 'react-native';
import Toast from 'react-native-simple-toast';

/**
 *
 * @param title --message title
 * @param description --alert description
 * @param leftButtonText --left button text
 * @param rightButtonText --right button text
 * @param onPressOK --onPress callback
 */
export const showAlert = (
  title: string,
  description: string,
  leftButtonText: string,
  rightButtonText: string,
  onPressOK: any,
) => {
  Alert.alert(title, description, [
    {
      text: leftButtonText,
      onPress: () => {},
      style: 'cancel',
    },
    {
      text: rightButtonText,
      onPress: onPressOK,
    },
  ]);
};

/**
 *
 * @param message --what message to display
 * @param duration -- how long to
 * @param style --style to toast message
 */
export const showToast = (message: any, duration?: any, style?: any) => {
  Toast.show(message, duration, style);
};
