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
  CLEAR_MESSAGE_SCHEDULE,
  CLEAR_VIDEO_SCHEDULE,
} from '../constants/ActionTypes';
import VideoCallScreen from '../../container/CallerApp/Video/Video';
import ChatScreen from '../../container/Messages/Chat/Chat';
import {showMessage} from 'react-native-flash-message';

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
      name={NavScreenTags.VIDEO_SCREEN}
      component={VideoCallScreen}
    />
    <Stack.Screen
      name={NavScreenTags.MESSAGES_STACK}
      component={MessagesAppStack}
    />
    <Stack.Screen
      name={NavScreenTags.SETTINGS_STACK}
      component={SettingsStack}
    />
    <Stack.Screen name={NavScreenTags.MESSAGES_CHAT} component={ChatScreen} />
  </Stack.Navigator>
);
const AppNavigation = () => {
  // ** ** ** ** RENDER RETURNS ** ** ** **

  const schedule = useSelector((state: any) => state.schedule);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (schedule.call) {
      const targetDate = new Date(schedule.call.countdown);
      const checkDateTime = () => {
        const currentDate = new Date();

        if (currentDate >= targetDate) {
          navigate(NavScreenTags.CALL_SCREEN, {
            isOutGoing: false,
            contactName: schedule.call.callerId,
            contactNumber: schedule.call.number,
            avatar: schedule.call.avatar,
          });
          dispatch({type: CLEAR_CALL_SCHEDULE, payload: {}});
          clearInterval(interval);
        }
      };
      const interval = setInterval(checkDateTime, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    if (schedule.video) {
      const targetDate = new Date(schedule.video.countdown);
      const checkDateTime = () => {
        const currentDate = new Date();

        if (currentDate >= targetDate) {
          navigate(NavScreenTags.VIDEO_SCREEN, {
            isOutGoing: false,
            contactName: schedule.video.callerId,
            contactNumber: schedule.video.number,
            avatar: schedule.video.avatar,
            incomingVideo: schedule.video.incomingVideo,
            outgoingVideo: schedule.video.outgoingVideo,
          });
          dispatch({type: CLEAR_VIDEO_SCHEDULE, payload: {}});
          clearInterval(interval);
        }
      };
      const interval = setInterval(checkDateTime, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    if (schedule.messages) {
      const targetDate = new Date(schedule.messages.countdown);
      const checkDateTime = () => {
        const currentDate = new Date();

        if (currentDate >= targetDate) {
          showMessage({
            message: 'New Message',
            type: 'warning',
            duration: 10000,
            onPress: () => {
              navigate(NavScreenTags.MESSAGES_CHAT, {
                messagesTask: schedule.messages,
              });
              dispatch({type: CLEAR_MESSAGE_SCHEDULE, payload: {}});
            },
          });

          clearInterval(interval);
        }
      };
      const interval = setInterval(checkDateTime, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule.call, schedule.video, schedule.messages]);

  return (
    //@ts-ignore
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
