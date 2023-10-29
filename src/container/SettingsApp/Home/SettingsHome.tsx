/* eslint-disable react-native/no-inline-styles */
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import styles from './styles';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';

export default function SettingsHome() {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor="white"
        translucent={false}
      />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View style={styles.headerContent}>
          <Text style={{fontSize: scaleSize(28), fontWeight: '500'}}>
            Settings
          </Text>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={styles.taskPlaceHolder}
            onPress={() => navigate(NavScreenTags.SETTINGS_CHANGE_WALLPAPER)}>
            <View>
              <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
                Change Wallpaper
              </Text>
              <Text>
                choose among many building wallpapers or choose a custom image
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.taskPlaceHolder}
            onPress={() => navigate(NavScreenTags.SETTINGS_CHANGE_DATE_DATE)}>
            <View>
              <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
                Change Status Bar Date/Time
              </Text>
              <Text>
                Edit date or time of the status bar, which ever date or time you
                want to keep will display through out the app
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.taskPlaceHolder}
            onPress={() =>
              navigate(NavScreenTags.SETTINGS_CHANGE_BATTERY_PERCENTAGE)
            }>
            <View>
              <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
                Change Battery Percentage
              </Text>
              <Text>
                Edit the battery percentage of the app. This change will be
                displayed throughout the app itself
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.taskPlaceHolder}
            onPress={() =>
              navigate(NavScreenTags.SETTINGS_CHANGE_MOBILE_CONNECTION)
            }>
            <View>
              <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
                Change Mobile Connection
              </Text>
              <Text>
                Change all the connection and network settings like signals bar,
                service, ISP etc
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </PageSkeleton>
    </>
  );
}
