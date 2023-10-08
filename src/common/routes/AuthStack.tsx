import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: Colors.WHITE_COLOR,
        },
      }}></Stack.Navigator>
  );
};

export default AuthStack;
