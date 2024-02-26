import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {onAuthStateChanged} from '../../common/services/Auth';
import {replace} from '../../common/utils/NavigatorUtils';

const Splash = () => {
  //** ** ** ** EFFECTS ** ** ** ** **  */
  const [user, setUser] = useState<any>('default');

  //TODO: implement firebase auth check

  function HandleUser(authUser: any) {
    setUser(authUser);
  }

  useEffect(() => {
    onAuthStateChanged(HandleUser);
    return () => {};
  }, []);

  useEffect(() => {
    if (user !== 'default') {
      console.log(user);
      if (user && user.uid) {
        replace(NavScreenTags.HOME);
        SplashScreen.hide();
      } else {
        replace(NavScreenTags.SIGN_IN);
      }
      SplashScreen.hide();
    }
    return () => {};
  }, [user]);

  // ** ** ** ** ** RENEDER RETURNS ** ** ** **
  return <></>;
};

export default Splash;
