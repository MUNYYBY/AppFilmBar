import {Alert} from 'react-native';

/**
 * Replcement of the console.log function
 * @param message --whatever message you want to print
 */
export const showConsole = (message: string) => {
  if (__DEV__) {
    console.log(message);
  }
};

/**
 * utility to show testing console and alert, which needs to eb disabled in prod env
 */
export const showMessage = (
  title: string,
  isAlert: boolean,
  ...params: any
) => {
  if (__DEV__) {
    if (isAlert) {
      Alert.alert(title, JSON.stringify(params));
    } else {
      console.log(`${title} >> `, params);
    }
  }
};
