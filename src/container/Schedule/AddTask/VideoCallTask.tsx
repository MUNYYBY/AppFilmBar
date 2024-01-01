/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import CustomInput from '../../../common/components/customInput';
import {useForm} from 'react-hook-form';
import {InputTypes} from '../../../common/constants/InputTypes';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../../../common/components/customButton';
import Colors from '../../../common/styles/Colors';

export default function VideoCallTask() {
  const {
    control,
    watch,
    reset,
    formState: {},
  } = useForm({
    defaultValues: {CountDown: '', Number: '', CallerId: ''},
    mode: 'onChange',
  });

  const [avatar, setAvatar] = React.useState<any>(null);
  const [incomingVideo, setIncomingVideo] = useState<null>(null);
  const [outgoingVideo, setOutgoingVideo] = useState<null>(null);

  const dispatch = useDispatch();

  function handleAvatarSelection() {
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
          setAvatar(response.assets[0]);
        }
      },
    );
  }
  function handleIncomingVideoSelection() {
    launchImageLibrary(
      {mediaType: 'video', selectionLimit: 1},
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          setIncomingVideo(response.assets[0]);
        }
      },
    );
  }
  function handleOutgoingVideoSelection() {
    launchImageLibrary(
      {mediaType: 'video', selectionLimit: 1},
      (response: any) => {
        console.log(response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          setOutgoingVideo(response.assets[0]);
        }
      },
    );
  }
  return (
    <PageSkeleton hasHeader={false} headerTitle="">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <TouchableOpacity
            style={[styles.uploadContainer, {position: 'relative'}]}
            onPress={() => handleAvatarSelection()}>
            {!avatar ? (
              <>
                <Icon2 size={32} color="black" name="add-photo-alternate" />
                <Text>Avatar</Text>
              </>
            ) : (
              <Image
                source={{uri: avatar.uri}}
                style={{
                  position: 'absolute',
                  top: 0,
                  width: scaleSize(100),
                  height: scaleSize(100),
                  backgroundColor: '#EEEEEE',
                  borderRadius: scaleSize(100),
                }}
              />
            )}
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={styles.videoUploadContainer}
              onPress={() => handleIncomingVideoSelection()}>
              <Icon size={40} color="black" name="video-outline" />
              <Text>Incoming Video</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.videoUploadContainer}
              onPress={() => handleOutgoingVideoSelection()}>
              <Icon size={40} color="black" name="video-outline" />
              <Text>Outgoing Video</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: scaleSize(20)}}>
            <Text style={styles.BoldText}>Countdown</Text>
            <CustomInput
              placeholder={'CountDown'}
              type={InputTypes.DATE_PICKER}
              control={control}
              name={'CountDown'}
              returnKeyType={'done'}
              rules={{
                required: 'Count Down is required',
              }}
              shouldShowIcon={watch('CountDown') !== undefined ? true : false}
            />
          </View>
          <View style={{marginTop: scaleSize(20)}}>
            <Text style={styles.BoldText}>Caller Id</Text>
            <CustomInput
              placeholder={'Caller Id'}
              type={InputTypes.TEXT_INPUT}
              control={control}
              name={'CallerId'}
              returnKeyType={'done'}
              rules={{
                required: 'Caller Id is required',
              }}
              shouldShowIcon={watch('CallerId') !== undefined ? true : false}
            />
          </View>
          <View style={{marginTop: scaleSize(20), width: '100%'}}>
            <Text style={styles.BoldText}>Number</Text>
            <CustomInput
              placeholder={'Number'}
              type={InputTypes.PHONE_NUMBER_INPUT}
              control={control}
              name={'Number'}
              returnKeyType={'done'}
              rules={{
                required: 'Number is required',
              }}
              shouldShowIcon={watch('Number') !== undefined ? true : false}
            />
          </View>
          <View style={{width: '100%'}}>
            <CustomButton
              onPress={() => {
                // handleScheduleCallTask();
              }}
              title={'Schedule'}
              buttonStyle={{
                width: '100%',
                marginVertical: scaleSize(20),
                backgroundColor: Colors.GREEN_COLOR,
              }}
              buttonText={{color: 'white'}}
            />
          </View>
        </View>
      </ScrollView>
    </PageSkeleton>
  );
}
