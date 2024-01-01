/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigate, navigationRef} from '../utils/NavigatorUtils';
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
import {useDispatch, useSelector} from 'react-redux';
import {
  CLEAR_CALL_SCHEDULE,
  SET_CALL_TASK_SCHEDULE,
} from '../constants/ActionTypes';

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
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (schedule.call) {
      // Set the target date and time
      const targetDate = new Date(schedule.call.countdown); // Replace with your target date and time

      // Update the code inside this function to execute when the target date and time is reached
      const checkDateTime = () => {
        const currentDate = new Date();

        if (currentDate >= targetDate) {
          // Your code to run when the target date and time is reached
          navigate(NavScreenTags.CALL_SCREEN, {
            isOutGoing: false,
            contactName: schedule.call.callerId,
            contactNumber: schedule.call.number,
            avatar: schedule.call.avatar,
          });

          dispatch({type: CLEAR_CALL_SCHEDULE, payload: {}});
          // Clear the interval once the code is executed
          clearInterval(interval);
        }
      };

      // Set up the interval to check the date and time every second
      const interval = setInterval(checkDateTime, 1000);

      // Clean up the interval when the component is unmounted
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule.call]);

  React.useEffect(() => {}, [schedule.call]);
  return (
    //@ts-ignore
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
