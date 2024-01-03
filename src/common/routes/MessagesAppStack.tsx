import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import {NavScreenTags} from '../constants/NavScreenTags';
import MessagesSplash from '../../container/Messages/Splash/Splash';
import MessagesAppHome from '../../container/Messages/Home/Home';

const MessagesAppStack = () => {
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
        name={NavScreenTags.MESSAGES_SPLASH}
        component={MessagesSplash}
      />
      <Stack.Screen
        name={NavScreenTags.MESSAGES_HOME}
        component={MessagesAppHome}
      />
    </Stack.Navigator>
  );
};

export default MessagesAppStack;
