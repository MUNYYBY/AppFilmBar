import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Images} from '../../common/constants/Images';
import moment from 'moment';
import {navigate} from '../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {useSelector} from 'react-redux';

export default function Home() {
  const settings = useSelector((state: any) => state.settings);
  return (
    <>
      <View style={{position: 'absolute', top: -10, left: 0, zIndex: 1000}}>
        <Text style={{color: 'white'}}>hello</Text>
      </View>

      <View style={styles.container}>
        <Image
          source={
            settings.wallpaper === 1
              ? Images.BACKGROUND_1
              : settings.wallpaper === 2
              ? Images.BACKGROUND_2
              : settings.wallpaper === 3 && Images.BACKGROUND_3
          }
          style={styles.background}
        />
        <SafeAreaView style={styles.safeAreaViewContainer}>
          <View style={styles.dateAndTimeContainer}>
            <Text style={styles.timeText}>{moment().format('MM')}</Text>
            <Text style={styles.timeText}>{moment().format('HH')}</Text>
            <Text style={styles.timeTextSec}>
              {moment().format('dddd, YYYY')}
            </Text>
          </View>
          <View style={styles.iconsStacks}>
            <TouchableOpacity
              activeOpacity={0.65}
              onPress={() => navigate(NavScreenTags.CALLERAPP_STACK)}>
              <Image source={Images.CALLER_ICON} style={styles.appIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.65}
              onPress={() => navigate(NavScreenTags.MESSAGES_STACK)}>
              <Image source={Images.MESSAGES_ICON} style={styles.appIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.65}
              onPress={() => navigate(NavScreenTags.SCHEDULE_STACK)}>
              <Image source={Images.SCHEDULE_ICON} style={[styles.appIcon]} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.65}
              onPress={() => navigate(NavScreenTags.SETTINGS_STACK)}>
              <Image source={Images.SETTINGS_ICON} style={styles.appIcon} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
