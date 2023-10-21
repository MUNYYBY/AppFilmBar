import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import {NavScreenTags} from '../constants/NavScreenTags';
import ScheduleSplash from '../../container/Schedule/Splash/Splash';
import CallerSplash from '../../container/CallerApp/Splash/Splash';
import CallerAppHome from '../../container/CallerApp/Home/Home';

const CallerAppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: Colors.WHITE_COLOR,
        },
      }}>
      <Stack.Screen
        name={NavScreenTags.CALLERAPP_SPLASH}
        component={CallerSplash}
      />
      <Stack.Screen
        name={NavScreenTags.CALLERAPP_HOME}
        component={CallerAppHome}
      />
    </Stack.Navigator>
  );
};

export default CallerAppStack;
