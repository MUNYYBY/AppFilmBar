/* eslint-disable react-native/no-inline-styles */
import {View, Text, Platform} from 'react-native';
import React from 'react';
import moment from 'moment';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIoni from 'react-native-vector-icons/Ionicons';

interface Props {
  backgroundColor?: string;
  barStyle?: 'dark-content' | 'light-content';
}

export default function CustomStatusbar(props: Props) {
  const {backgroundColor, barStyle} = props;

  return (
    Platform.OS !== 'ios' && (
      <View
        style={{
          backgroundColor,
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
        }}>
        <Text
          style={{
            fontSize: scaleFontSize(16),
            color: barStyle === 'dark-content' ? 'black' : 'white',
          }}>
          {moment().format('HH:MM')}
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
          <Icon
            name="wifi"
            color={barStyle === 'dark-content' ? 'black' : 'white'}
            size={scaleSize(16)}
            style={{paddingLeft: 7.5}}
          />
          <IconIoni
            name="battery-full"
            color={barStyle === 'dark-content' ? 'black' : 'white'}
            size={scaleSize(18)}
            style={{paddingLeft: 7.5}}
          />
        </View>
      </View>
    )
  );
}
