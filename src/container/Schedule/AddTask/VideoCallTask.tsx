/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
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
import {SET_VIDEO_TASK_SCHEDULE} from '../../../common/constants/ActionTypes';
import {v4 as uuidv4} from 'uuid';
import {VideoModal} from '../../../common/types/schedule';
import {showToast} from '../../../common/utils/AlertUtils';
import CustomErrorText from '../../../common/components/customErrorText';
import moment from 'moment';

export default function VideoCallTask() {
  const {
    control,
    watch,
    reset,
    setError,
    clearErrors,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {CountDown: '', Number: '', CallerId: ''},
    mode: 'onChange',
  });

  const [avatar, setAvatar] = React.useState<any>(null);
  const [incomingVideo, setIncomingVideo] = useState<any>(null);
  const [minutes, setMinutes] = useState<any>();
  const [seconds, setSeconds] = useState<any>();

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

  function handleScheduleVideoTask() {
    clearErrors('root');
    if (!minutes && !seconds) {
      return setError('root', {
        type: 'manual',
        message: 'Please enter countdown value',
      });
    }
    if (!incomingVideo) {
      setError('root', {
        type: 'manual',
        message: 'Please select both outgoinng and incoming videos',
      });
      return false;
    }
    dispatch({
      type: SET_VIDEO_TASK_SCHEDULE,
      payload: {
        id: uuidv4(),
        avatar: avatar ? avatar.uri : null,
        callerId: control._formValues.CallerId,
        number: control._formValues.Number,
        countdown: String(
          moment()
            .add(minutes ? minutes : 0, 'm')
            .add(seconds ? seconds : 0, 's'),
        ),
        incomingVideo: incomingVideo.uri,
        createdAt: String(new Date()),
      } as VideoModal,
    });
    setMinutes(null);
    setSeconds(null);
    reset();
    setAvatar(null);
    setIncomingVideo(null);
    showToast('Task scheduled!');
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
                <Icon2
                  size={32}
                  color={Colors.BLACK_COLOR}
                  name="add-photo-alternate"
                />
                <Text>Avatar</Text>
              </>
            ) : (
              <Image
                source={{uri: avatar.uri}}
                style={{
                  position: 'absolute',
                  top: 0,
                  width: scaleSize(130),
                  height: scaleSize(130),
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
              onPress={() => handleIncomingVideoSelection()}
              disabled={incomingVideo ? true : false}>
              <Icon size={40} color={Colors.BLACK_COLOR} name="video-outline" />
              <Text>{incomingVideo ? 'Video Selected' : 'Incoming Video'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: scaleSize(20)}}>
            {errors.root && (
              <CustomErrorText
                errorText={errors.root?.message}
                isError={errors.root ? true : false}
              />
            )}
          </View>
          <View style={{marginTop: scaleSize(20), width: '100%'}}>
            <Text style={styles.BoldText}>Countdown</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="MM"
                keyboardType="numeric"
                value={minutes}
                onChangeText={(text: string) => setMinutes(text)}
              />
              <Text
                style={{fontSize: 30, fontWeight: '700', marginHorizontal: 10}}>
                :
              </Text>
              <TextInput
                style={styles.input}
                placeholder="SS"
                keyboardType="numeric"
                value={seconds}
                onChangeText={(text: string) => setSeconds(text)}
              />
            </View>
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
                handleScheduleVideoTask();
              }}
              title={'Schedule'}
              shouldEnable={isValid}
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
