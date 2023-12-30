/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../utils/NavigatorUtils';
import Colors from '../styles/Colors';
import Home from '../../container/Home/Home';
import {NavScreenTags} from '../constants/NavScreenTags';
import Splash from '../../container/Splash/Splash';
import Login from '../../container/Auth/Login/Login';
import Signup from '../../container/Auth/Signup/Signup';
import ScheduleStack from './ScheduleStack';
import CallerAppStack from './CallerAppStack';
import MessagesAppStack from './MessagesAppStack';
import SettingsStack from './SettingsStack';
import Call from '../../container/CallerApp/Call/Call';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: Colors.WHITE_COLOR,
      },
    }}>
    <Stack.Screen name={NavScreenTags.SPLASH} component={Splash} />
    <Stack.Screen name={NavScreenTags.SIGN_IN} component={Login} />
    <Stack.Screen name={NavScreenTags.SIGN_UP} component={Signup} />
    <Stack.Screen name={NavScreenTags.HOME} component={Home} />
    <Stack.Screen
      name={NavScreenTags.SCHEDULE_STACK}
      component={ScheduleStack}
    />
    <Stack.Screen
      name={NavScreenTags.CALLERAPP_STACK}
      component={CallerAppStack}
    />
    <Stack.Screen name={NavScreenTags.CALL_SCREEN} component={Call} />
    <Stack.Screen
      name={NavScreenTags.MESSAGES_STACK}
      component={MessagesAppStack}
    />
    <Stack.Screen
      name={NavScreenTags.SETTINGS_STACK}
      component={SettingsStack}
    />
  </Stack.Navigator>
);
const AppNavigation = () => {
  // ** ** ** ** RENDER RETURNS ** ** ** **

  const schedule = useSelector((state: any) => state.schedule);
  return (
    //@ts-ignore
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
