import axios from 'axios';
import {showAlert} from '../utils/AlertUtils';

export default function Axios401Interceptor(logout: any) {
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response.status === 401) {
        console.log('401');
        logout();
        showAlert(
          'Session Expired',
          'You have been logout from the app due to session expiry. Kindly login again!',
          '',
          'OK, Login again',
          () => {},
        );
      }
      return Promise.reject(error);
    },
  );
}
