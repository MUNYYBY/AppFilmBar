import Geolocation from '@react-native-community/geolocation';

export const GetCurrentLocation: any = () => {
  Geolocation.getCurrentPosition(pos => {
    const crd = pos.coords;
    return {latitude: crd.latitude, longitude: crd.longitude};
  });
};
