import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {onAuthStateChanged} from '../../common/services/Auth';
import {navigate} from '../../common/utils/NavigatorUtils';

const Splash = ({navigation}: any) => {
  //** ** ** ** EFFECTS ** ** ** ** **  */
  // const [user, setUser] = useState<any>('default');

  //TODO: implement firebase auth check

  //   function HandleUser(authUser: any) {
  //     setUser(authUser);
  //   }

  //   useEffect(() => {
  //     onAuthStateChanged(HandleUser);
  //     return () => {};
  //   }, []);

  useEffect(() => {
    //     if (user !== 'default') {
    //       if (user && user.uid) {
    //         props.navigation.navigate(NavScreenTags.DASHBOARD_STACK);
    //         SplashScreen.hide();
    //       } else {
    //         props.navigation.navigate(NavScreenTags.AUTH_STACK);
    //     }
    // }
    navigation.navigate(NavScreenTags.HOME);
    SplashScreen.hide();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ** ** ** ** ** RENEDER RETURNS ** ** ** **
  return <></>;
};

export default Splash;
