import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Images} from '../../common/constants/Images';
import moment from 'moment';
import {navigate} from '../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../common/constants/NavScreenTags';

export default function Home() {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.container}>
        <Image source={Images.BACKGROUND} style={styles.background} />
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
            <TouchableOpacity activeOpacity={0.65}>
              <Image source={Images.CONTACTS_ICON} style={styles.appIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.65}
              onPress={() => navigate(NavScreenTags.SCHEDULE_STACK)}>
              <Image source={Images.SETTINGS_ICON} style={styles.appIcon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.65}>
              <Image source={Images.MESSAGES_ICON} style={styles.appIcon} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
