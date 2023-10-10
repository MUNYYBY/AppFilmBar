import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import {NavScreenTags} from '../constants/NavScreenTags';
import ForgotPassword from '../../container/ForgotPassword/ForgotPassword';
import Signup from '../../container/Signup/Signup';
import Login from '../../container/Login/Login';
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
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={NavScreenTags.SIGN_IN} component={Login} />
        <Stack.Screen name={NavScreenTags.SIGN_UP} component={Signup} />
        <Stack.Screen
          name={NavScreenTags.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </Stack.Navigator>
  );
};

export default AuthStack;
