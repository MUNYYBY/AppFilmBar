/* eslint-disable react-native/no-inline-styles */
import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIoni from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../styles/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../constants/StorageKeysTags';
import {
  SET_BATTERY,
  SET_DATE_AND_TIME,
  SET_WIFI_AND_SERVICE,
} from '../../constants/ActionTypes';

interface Props {
  barStyle: 'dark-content' | 'light-content';
  backgroundColor?: string;
}

export default function CustomStatusbar(props: Props) {
  const {barStyle, backgroundColor} = props;

  const [time, setTime] = useState<any>(null);

  //** redux */
  const settings = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  async function GetLS() {
    const temp = await AsyncStorage.getItem(StorageKeysTags.Time);
    const temp2 = await AsyncStorage.getItem(StorageKeysTags.Signals_and_Wifi);
    const temp3 = await AsyncStorage.getItem(StorageKeysTags.Battery);
    if (temp !== null) {
      setTime(JSON.stringify(temp));
      dispatch({
        type: SET_DATE_AND_TIME,
        payload: JSON.parse(temp),
      });
    }
    if (temp2 !== null) {
      dispatch({
        type: SET_WIFI_AND_SERVICE,
        payload: JSON.parse(temp2),
      });
    }
    if (temp3 !== null) {
      dispatch({
        type: SET_BATTERY,
        payload: JSON.parse(temp3),
      });
    }
  }

  useEffect(() => {
    GetLS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (time !== settings.time) {
      GetLS();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.time]);
  return (
    <View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2000,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical:
            Platform.OS === 'ios' ? scaleSize(18.5) : scaleSize(12.5),
          paddingHorizontal: scaleSize(20),
          backgroundColor: backgroundColor,
        },
        // backgroundColor && {},
      ]}>
      <Text
        style={{
          fontSize: scaleFontSize(16),
          color:
            barStyle === 'dark-content'
              ? Colors.BLACK_COLOR
              : Colors.WHITE_COLOR,
        }}>
        {moment(settings.time).format('hh:mm')}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!settings.isNoService ? (
          <Icon
            name="signal"
            color={
              barStyle === 'dark-content'
                ? Colors.BLACK_COLOR
                : Colors.WHITE_COLOR
            }
            size={scaleSize(16)}
            style={{paddingLeft: 7.5}}
          />
        ) : (
          <Text
            style={{
              fontSize: scaleFontSize(16),
              color:
                barStyle === 'dark-content'
                  ? Colors.BLACK_COLOR
                  : Colors.WHITE_COLOR,
            }}>
            No service
          </Text>
        )}

        {settings.isWifi && (
          <Icon
            name="wifi"
            color={
              barStyle === 'dark-content'
                ? Colors.BLACK_COLOR
                : Colors.WHITE_COLOR
            }
            size={scaleSize(16)}
            style={{paddingLeft: 7.5}}
          />
        )}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconIoni
            name="battery-full"
            color={
              barStyle === 'dark-content'
                ? Colors.BLACK_COLOR
                : Colors.WHITE_COLOR
            }
            size={scaleSize(18)}
            style={{paddingLeft: 7.5}}
          />
          {Platform.OS === 'android' && (
            <Text
              style={{
                fontSize: scaleFontSize(14),
                color:
                  barStyle === 'dark-content'
                    ? Colors.BLACK_COLOR
                    : Colors.WHITE_COLOR,
                marginLeft: scaleSize(5),
              }}>
              {settings.battery}%
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
