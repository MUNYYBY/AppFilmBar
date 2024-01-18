/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {Images} from '../../../common/constants/Images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {goBack} from '../../../common/utils/NavigatorUtils';
import Video from 'react-native-video';
import {RNCamera} from 'react-native-camera';

export default function VideoCallScreen({route}: any) {
  const {isOutGoing, contactName, contactNumber, avatar, incomingVideo} =
    route.params;
  const [isCallAttended, setIsCallAttended] = useState(
    isOutGoing ? true : false,
  );
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View
          style={{
            flex: 1,
            marginVertical: isCallAttended ? scaleSize(10) : scaleSize(75),
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isCallAttended ? '110%' : '100%',
            marginHorizontal: isCallAttended ? scaleSize(-16) : 0,
          }}>
          {!isCallAttended && (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {avatar ? (
                <Image
                  source={{uri: avatar}}
                  style={{
                    width: scaleSize(130),
                    height: scaleSize(130),
                    backgroundColor: '#EEEEEE',
                    borderRadius: scaleSize(100),
                  }}
                />
              ) : (
                <Image
                  source={Images.CONTACT_LARGE}
                  style={{height: 130, width: 130, resizeMode: 'contain'}}
                />
              )}
              <Text
                style={{
                  fontSize: scaleFontSize(24),
                  fontWeight: '500',
                  marginTop: scaleSize(20),
                }}>
                {contactName}
              </Text>
              <Text style={{fontSize: scaleFontSize(18.5)}}>
                {contactNumber}
              </Text>
            </View>
          )}
          {isCallAttended && (
            <>
              <Video
                source={{uri: incomingVideo}}
                onError={(err: any) => console.log(err)}
                controls={false}
                resizeMode="cover"
                style={{height: '100%', width: '100%'}}
              />
              <View style={{}}>
                <RNCamera
                  style={{
                    height: scaleSize(200),
                    width: scaleSize(120),
                    borderRadius: scaleSize(10),
                    position: 'absolute',
                    bottom: 10,
                    left: -170,
                    shadowColor: 'white',
                    shadowOffset: {
                      width: 0,
                      height: 11,
                    },
                    shadowOpacity: 0.55,
                    shadowRadius: 14.78,
                    elevation: 22,
                  }}
                  type={RNCamera.Constants.Type.front}
                  flashMode={RNCamera.Constants.FlashMode.off}
                  androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                  }}
                />
              </View>
            </>
          )}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E94C4C',
                width: isCallAttended ? scaleSize(100) : scaleSize(75),
                height: scaleSize(75),
                borderRadius: scaleSize(85),
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: isCallAttended ? scaleSize(0) : scaleSize(70),
                position: isCallAttended ? 'absolute' : 'relative',
                bottom: isCallAttended ? 10 : 0,
                left: isCallAttended ? 80 : 0,
              }}
              onPress={() => goBack()}>
              <Icon name="call-end" size={38} color={'white'} />
            </TouchableOpacity>
            {!isCallAttended && (
              <TouchableOpacity
                style={{
                  backgroundColor: '#0BCD74',
                  width: scaleSize(75),
                  height: scaleSize(75),
                  borderRadius: scaleSize(85),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setIsCallAttended(true)}>
                <Icon name="call" size={32} color={'white'} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </PageSkeleton>
    </>
  );
}
