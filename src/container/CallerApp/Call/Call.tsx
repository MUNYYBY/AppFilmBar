/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {Images} from '../../../common/constants/Images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {goBack} from '../../../common/utils/NavigatorUtils';

export default function Call({route}: any) {
  const {isOutGoing, contactName, contactNumber, avatar} = route.params;
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
            marginVertical: scaleSize(75),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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
            <Text style={{fontSize: scaleFontSize(18.5)}}>{contactNumber}</Text>
          </View>
          {isCallAttended && (
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Icon2 name="volume-mute" size={36} color={'black'} />
                  <Text>Mute</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="speaker-phone" size={36} color={'black'} />
                  <Text>Speaker</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Icon2
                    name="record-circle-outline"
                    size={36}
                    color={'black'}
                  />
                  <Text>Record</Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  marginTop: scaleSize(50),
                }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Icon2 name="video" size={36} color={'black'} />
                  <Text>Video</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="dialpad" size={36} color={'black'} />
                  <Text>Dialpad</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Icon2 name="pause" size={36} color={'black'} />
                  <Text>Pause</Text>
                </View>
              </View>
            </View>
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
                width: scaleSize(75),
                height: scaleSize(75),
                borderRadius: scaleSize(85),
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: isCallAttended ? scaleSize(0) : scaleSize(70),
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
