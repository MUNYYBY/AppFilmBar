/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {Images} from '../../../common/constants/Images';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {useDispatch, useSelector} from 'react-redux';
import {SET_WALLPAPER} from '../../../common/constants/ActionTypes';
import Colors from '../../../common/styles/Colors';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

export default function SettingsChangeWallpaper() {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings);
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Wallpaper">
        <View
          style={{
            borderRadius: scaleSize(10),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() =>
              dispatch({type: SET_WALLPAPER, payload: {wallpaper: 1}})
            }
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Image
              source={Images.BACKGROUND_1}
              style={[
                {
                  height: scaleSize(250),
                  width: '70%',
                  resizeMode: 'contain',
                  borderRadius: scaleSize(10),
                },
                settings.wallpaper === 1 && {
                  borderColor: Colors.GREEN_COLOR,
                  borderWidth: scaleSize(5),
                },
              ]}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              dispatch({type: SET_WALLPAPER, payload: {wallpaper: 2}})
            }
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.BACKGROUND_2}
              style={[
                {
                  height: scaleSize(250),
                  width: '70%',
                  resizeMode: 'contain',
                  borderRadius: scaleSize(10),
                },
                settings.wallpaper === 2 && {
                  borderColor: Colors.GREEN_COLOR,
                  borderWidth: scaleSize(5),
                },
              ]}
            />
          </Pressable>
        </View>
        <View
          style={{
            borderRadius: scaleSize(10),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() =>
              dispatch({type: SET_WALLPAPER, payload: {wallpaper: 3}})
            }
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scaleSize(25),
            }}>
            <Image
              source={Images.BACKGROUND_3}
              style={[
                {
                  height: scaleSize(250),
                  width: '35%',
                  resizeMode: 'contain',
                  borderRadius: scaleSize(10),
                },
                settings.wallpaper === 3 && {
                  borderColor: Colors.GREEN_COLOR,
                  borderWidth: scaleSize(5),
                },
              ]}
            />
          </Pressable>
        </View>
      </PageSkeleton>
    </>
  );
}
