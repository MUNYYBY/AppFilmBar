/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import styles from './styles';
import {goBack, navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../common/styles/Colors';
import {Logout} from '../../../common/services/Auth';

export default function SettingsHome() {
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View style={styles.headerContent}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: scaleSize(-16),
            }}>
            <TouchableOpacity style={{}} onPress={goBack}>
              <Icon name="chevron-left" size={45} color={Colors.BLACK_COLOR} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scaleSize(24),
                fontWeight: '500',
                color: Colors.BLACK_COLOR,
              }}>
              Settings
            </Text>
          </View>
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
          <TouchableOpacity
            style={styles.taskPlaceHolder}
            onPress={() => navigate(NavScreenTags.DELETE_ACCOUNT)}>
            <View>
              <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
                Delete Account
              </Text>
              <Text>Remove your account and all the preferances</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.taskPlaceHolder}
            onPress={() => Logout()}>
            <View>
              <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
                Logout
              </Text>
              <Text>Sign out of the current session</Text>
            </View>
          </TouchableOpacity>
        </View>
      </PageSkeleton>
    </>
  );
}
