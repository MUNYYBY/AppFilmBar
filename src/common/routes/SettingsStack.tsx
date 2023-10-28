import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import {NavScreenTags} from '../constants/NavScreenTags';
import SettingsSplash from '../../container/SettingsApp/Splash/Splash';
import SettingsHome from '../../container/SettingsApp/Home/ScheduleHome';
import SettingsChangeWallpaper from '../../container/SettingsApp/ChangeWallpaper/ChangeWallpaper';

const SettingsStack = () => {
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
        name={NavScreenTags.SETTINGS_SPLASH}
        component={SettingsSplash}
      />
      <Stack.Screen
        name={NavScreenTags.SETTINGS_HOME}
        component={SettingsHome}
      />
      <Stack.Screen
        name={NavScreenTags.SETTINGS_CHANGE_WALLPAPER}
        component={SettingsChangeWallpaper}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
