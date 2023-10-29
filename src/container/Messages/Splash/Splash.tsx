/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../../common/constants/Images';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {reset} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import {DURATION_TO_OPEN_APP} from '../../../common/constants/AppContants';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

export default function MessagesSplash() {
  useEffect(() => {
    const interval = setTimeout(() => {
      reset(NavScreenTags.MESSAGES_HOME);
    }, DURATION_TO_OPEN_APP);
    return () => clearTimeout(interval);
  }, []);
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
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
            height: scaleSize(50),
            width: scaleSize(50),
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
