/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../../common/constants/Images';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {reset} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import {DURATION_TO_OPEN_APP} from '../../../common/constants/AppContants';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import Colors from '../../../common/styles/Colors';

export default function SettingsSplash() {
  useEffect(() => {
    const interval = setTimeout(() => {
      reset(NavScreenTags.SETTINGS_HOME);
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
          backgroundColor: Colors.WHITE_COLOR,
        }}>
        <Image
          source={Images.SETTINGS_ICON}
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
