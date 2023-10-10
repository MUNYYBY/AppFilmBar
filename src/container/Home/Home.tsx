import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Images} from '../../common/constants/Images';
import moment from 'moment';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Images.BACKGROUND} style={styles.background} />
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.dateAndTimeContainer}>
          <Text style={styles.timeText}>{moment().format('MM:HH a')}</Text>
        </View>
        <View style={styles.iconsStacks}>
          <TouchableOpacity>
            <Image source={Images.CALLER_ICON} style={styles.appIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.CONTACTS_ICON} style={styles.appIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.SETTINGS_ICON} style={styles.appIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.MESSAGES_ICON} style={styles.appIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
