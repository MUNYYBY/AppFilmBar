import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Images} from '../../common/constants/Images';
import moment from 'moment';
import {navigate} from '../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {useDispatch, useSelector} from 'react-redux';
import CustomStatusbar from '../../common/components/customStatusbar/CustomStatusbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../common/constants/StorageKeysTags';
import {useIsFocused} from '@react-navigation/native';
import {SET_WALLPAPER} from '../../common/constants/ActionTypes';

export default function Home({isIcons}: any) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings);
  const [wallpaper, setWallpaper] = useState<any>(null);
  async function GetLS() {
    const temp = await AsyncStorage.getItem(StorageKeysTags.Wallpaper);
    if (temp !== null) {
      setWallpaper(JSON.parse(temp));
      dispatch({
        type: SET_WALLPAPER,
        payload: JSON.parse(temp),
      });
    }
  }

  useEffect(() => {
    GetLS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    GetLS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return (
    <>
      <CustomStatusbar barStyle="light-content" />
      <View style={styles.container}>
        <Image
          source={
            wallpaper && wallpaper.customWallpaper !== ''
              ? {uri: wallpaper.customWallpaper.uri}
              : wallpaper && wallpaper.wallpaper === 1
              ? Images.BACKGROUND_1
              : wallpaper && wallpaper.wallpaper === 2
              ? Images.BACKGROUND_2
              : wallpaper && wallpaper.wallpaper === 3
              ? Images.BACKGROUND_3
              : Images.BACKGROUND_1
          }
          style={styles.background}
        />
        <SafeAreaView style={styles.safeAreaViewContainer}>
          <View
            style={[
              isIcons
                ? {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50,
                  }
                : styles.dateAndTimeContainer,
              {opacity: isIcons ? 1 : 0},
            ]}>
            <Text style={styles.timeText}>
              {moment(settings.time).format('hh')}
            </Text>
            <Text style={styles.timeText}>
              {moment(settings.time).format('mm')}
            </Text>
            <Text style={styles.timeTextSec}>
              {moment(settings.date).format('dddd, YYYY')}
            </Text>
          </View>
          {!isIcons && (
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
          )}
        </SafeAreaView>
      </View>
    </>
  );
}
