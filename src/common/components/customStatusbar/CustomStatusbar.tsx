/* eslint-disable react-native/no-inline-styles */
import {View, Text, Platform} from 'react-native';
import React from 'react';
import moment from 'moment';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIoni from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

interface Props {
  barStyle: 'dark-content' | 'light-content';
  backgroundColor?: string;
}

export default function CustomStatusbar(props: Props) {
  const {barStyle, backgroundColor} = props;

  //** redux */
  const settings = useSelector((state: any) => state.settings);

  return (
    Platform.OS !== 'ios' && (
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
            paddingVertical: scaleSize(12.5),
            paddingHorizontal: scaleSize(20),
            backgroundColor: backgroundColor,
          },
          // backgroundColor && {},
        ]}>
        <Text
          style={{
            fontSize: scaleFontSize(16),
            color: barStyle === 'dark-content' ? 'black' : 'white',
          }}>
          {moment(settings.time).format('MM:HH')}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="signal"
            color={barStyle === 'dark-content' ? 'black' : 'white'}
            size={scaleSize(16)}
            style={{paddingLeft: 7.5}}
          />
          {settings.isWifi && (
            <Icon
              name="wifi"
              color={barStyle === 'dark-content' ? 'black' : 'white'}
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
              color={barStyle === 'dark-content' ? 'black' : 'white'}
              size={scaleSize(18)}
              style={{paddingLeft: 7.5}}
            />
            <Text
              style={{
                fontSize: scaleFontSize(14),
                color: barStyle === 'dark-content' ? 'black' : 'white',
                marginLeft: scaleSize(5),
              }}>
              {settings.battery}%
            </Text>
          </View>
        </View>
      </View>
    )
  );
}
