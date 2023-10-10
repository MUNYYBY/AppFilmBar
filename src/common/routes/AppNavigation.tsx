/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../utils/NavigatorUtils';
import Colors from '../styles/Colors';
import Home from '../../container/Home/Home';
import {NavScreenTags} from '../constants/NavScreenTags';
import Splash from '../../container/Splash/Splash';
import AuthStack from './AuthStack';
import Login from '../../container/Login/Login';
import Signup from '../../container/Signup/Signup';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const RootStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.WHITE_COLOR,
        },
      }}>
      <Stack.Screen name={NavScreenTags.SPLASH} component={Splash} />
      {/* <Stack.Screen name={NavScreenTags.AUTH_STACK} component={AuthStack} /> */}
      <Stack.Screen name={NavScreenTags.SIGN_IN} component={Login} />
      <Stack.Screen name={NavScreenTags.SIGN_UP} component={Signup} />
      <Stack.Screen name={NavScreenTags.HOME} component={Home} />
    </Stack.Navigator>
  );

  // ** ** ** ** RENDER RETURNS ** ** ** **
  return (
    //@ts-ignore
    <NavigationContainer
      // theme={usedTheme === true ? DarkTheme : LightTheme}
      ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
