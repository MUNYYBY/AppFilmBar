import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import {NavScreenTags} from '../constants/NavScreenTags';
import ScheduleSplash from '../../container/Schedule/Splash/Splash';
import ScheduleHome from '../../container/Schedule/Home/ScheduleHome';
import AddTask from '../../container/Schedule/AddTask/AddTask';

const ScheduleStack = () => {
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
        name={NavScreenTags.SCHEDULE_SPLASH}
        component={ScheduleSplash}
      />
      <Stack.Screen
        name={NavScreenTags.SCHEDULE_HOME}
        component={ScheduleHome}
      />
      <Stack.Screen name={NavScreenTags.ADD_TASK} component={AddTask} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
