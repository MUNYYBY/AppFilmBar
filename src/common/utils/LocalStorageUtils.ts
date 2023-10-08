import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_INFO_PLACEHOLDER = 'user-info';
const SESSION_TOKEN_PLACEHOLDER = 'session-token';
const USER_REGION = 'user-region';
// const SESSION_TOKEN_EXPIRY_PLACEHOLDER = 'pigeonship-session-token-expiry';

//** following functions deals with local storage */

export async function setLocalStorageToken(token: any) {
  try {
    const jsonToken = JSON.stringify(token);
    await AsyncStorage.setItem(SESSION_TOKEN_PLACEHOLDER, jsonToken);
  } catch (e) {
    return e;
  }
}

export async function setLocalStorageSession(driverInfo: any) {
  try {
    const jsonDriverInfo = JSON.stringify(driverInfo);
    await AsyncStorage.setItem(USER_INFO_PLACEHOLDER, jsonDriverInfo);
  } catch (e) {
    return e;
  }
}
export async function setLocalStorageRegion(region: any) {
  try {
    const jsonDriverInfo = JSON.stringify(region);
    await AsyncStorage.setItem(USER_REGION, jsonDriverInfo);
  } catch (e) {
    return e;
  }
}

export async function getLocalStorageSession() {
  try {
    const jsonDriverInfo = await AsyncStorage.getItem(USER_INFO_PLACEHOLDER);
    const jsonSession = await AsyncStorage.getItem(SESSION_TOKEN_PLACEHOLDER);
    const dataDriverInfo =
      jsonDriverInfo != null ? JSON.parse(jsonDriverInfo) : false;
    const jsonRegion = await AsyncStorage.getItem(USER_REGION);
    const dataSession = jsonSession != null ? JSON.parse(jsonSession) : false;
    const dataRegion = jsonRegion != null ? JSON.parse(jsonRegion) : false;
    return {
      driver_info: dataDriverInfo,
      token: {token: dataSession},
      region: dataRegion,
    };
  } catch (e) {
    return e;
  }
}
export async function getLocalStorageToken() {
  try {
    const jsonSession = await AsyncStorage.getItem(SESSION_TOKEN_PLACEHOLDER);
    const dataSession = jsonSession != null ? JSON.parse(jsonSession) : false;
    return dataSession;
  } catch (e) {
    return e;
  }
}
export async function clearLocalStorageSession() {
  try {
    const jsonDriverInfo = await AsyncStorage.removeItem(USER_INFO_PLACEHOLDER);
    const jsonSession = await AsyncStorage.removeItem(
      SESSION_TOKEN_PLACEHOLDER,
    );
    const jsonRegion = await AsyncStorage.removeItem(USER_REGION);
    return {
      driver_info: jsonDriverInfo,
      token: {token: jsonSession},
      region: jsonRegion,
    };
  } catch (e) {
    return e;
  }
}
