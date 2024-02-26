import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import {NavScreenTags} from '../constants/NavScreenTags';
import SettingsSplash from '../../container/SettingsApp/Splash/Splash';
import SettingsHome from '../../container/SettingsApp/Home/SettingsHome';
import SettingsChangeWallpaper from '../../container/SettingsApp/ChangeWallpaper/ChangeWallpaper';
import ChangeMobileConnection from '../../container/SettingsApp/ChangeMobileConnection/ChangeMobileConnection';
import ChangeDateTime from '../../container/SettingsApp/ChangeDateTime/ChangeDateTime';
import ChangeBatteryPercentage from '../../container/SettingsApp/ChangeBatteryPercentage/ChangeBatteryPercentage';
import DeleteAccount from '../../container/SettingsApp/DeleteAccount/DeleteAccount';

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
      <Stack.Screen
        name={NavScreenTags.SETTINGS_CHANGE_MOBILE_CONNECTION}
        component={ChangeMobileConnection}
      />
      <Stack.Screen
        name={NavScreenTags.SETTINGS_CHANGE_DATE_DATE}
        component={ChangeDateTime}
      />
      <Stack.Screen
        name={NavScreenTags.SETTINGS_CHANGE_BATTERY_PERCENTAGE}
        component={ChangeBatteryPercentage}
      />
      <Stack.Screen
        name={NavScreenTags.DELETE_ACCOUNT}
        component={DeleteAccount}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
