import {Linking, Alert, Platform} from 'react-native';

export const callNumber = (phone: any) => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `tel://${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      return Linking.openURL(phoneNumber);
      //   if (!supported) {
      //     Alert.alert('Phone number is not available');
      //   } else {
      //     return Linking.openURL(phoneNumber);
      //   }
    })
    .catch(err => console.log(err));
};

export const sendSms = (phone: any) => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `sms://${phone}`;
  } else {
    phoneNumber = `sms:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      return Linking.openURL(phoneNumber);
      //   if (!supported) {
      //     Alert.alert('Phone number is not available');
      //   } else {
      //     return Linking.openURL(phoneNumber);
      //   }
    })
    .catch(err => console.log(err));
};

export const OpenDefualtMapsApp = (lat, lng, label) => {
  const scheme = Platform.select({ios: 'maps://0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${lat},${lng}`;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};
