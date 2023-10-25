/* eslint-disable react-native/no-inline-styles */
import {Image, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../../common/constants/Images';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {reset} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';

export default function MessagesSplash() {
  useEffect(() => {
    const interval = setTimeout(() => {
      reset(NavScreenTags.MESSAGES_HOME);
    }, 2500);
    return () => clearTimeout(interval);
  }, []);
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor="white"
        translucent={false}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={Images.MESSAGES_ICON}
          style={{
            height: scaleSize(60),
            width: scaleSize(60),
            resizeMode: 'contain',
            transform: [
              {
                scale: 1.5,
              },
            ],
          }}
        />
      </View>
    </>
  );
}
