/* eslint-disable react-native/no-inline-styles */
import {View, Image, Pressable} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {Images} from '../../../common/constants/Images';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {useDispatch, useSelector} from 'react-redux';
import {
  SET_CUSTOM_WALLAPPER,
  SET_WALLPAPER,
} from '../../../common/constants/ActionTypes';
import Colors from '../../../common/styles/Colors';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import CustomButton from '../../../common/components/customButton';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../../common/constants/StorageKeysTags';

export default function SettingsChangeWallpaper() {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings);

  async function handleWallpaperSelect() {
    launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 1},
      (response: any) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

          // console.log(response.assets[0]);
          dispatch({
            type: SET_CUSTOM_WALLAPPER,
            payload: {customWallpaper: response.assets[0], wallpaper: 0},
          });
          AsyncStorage.setItem(
            StorageKeysTags.Wallpaper,
            JSON.stringify({
              customWallpaper: response.assets[0],
              wallpaper: 0,
            }),
          );
        }
      },
    );
  }
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
            onPress={() => {
              AsyncStorage.setItem(
                StorageKeysTags.Wallpaper,
                JSON.stringify({
                  wallpaper: 1,
                  customWallpaper: '',
                }),
              );
              dispatch({
                type: SET_WALLPAPER,
                payload: {wallpaper: 1, customWallpaper: ''},
              });
            }}
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
            onPress={() => {
              AsyncStorage.setItem(
                StorageKeysTags.Wallpaper,
                JSON.stringify({wallpaper: 2, customWallpaper: ''}),
              );
              dispatch({
                type: SET_WALLPAPER,
                payload: {wallpaper: 2, customWallpaper: ''},
              });
            }}
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
            onPress={() => {
              AsyncStorage.setItem(
                StorageKeysTags.Wallpaper,
                JSON.stringify({
                  wallpaper: 3,
                  customWallpaper: '',
                }),
              );
              dispatch({
                type: SET_WALLPAPER,
                payload: {wallpaper: 3, customWallpaper: ''},
              });
            }}
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
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            marginBottom: scaleSize(24),
          }}>
          <CustomButton
            title={'Select wallpaper from gallery'}
            onPress={() => {
              handleWallpaperSelect();
            }}
          />
        </View>
      </PageSkeleton>
    </>
  );
}
