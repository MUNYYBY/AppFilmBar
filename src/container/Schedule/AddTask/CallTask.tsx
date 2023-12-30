/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import CustomInput from '../../../common/components/customInput';
import {useForm} from 'react-hook-form';
import {InputTypes} from '../../../common/constants/InputTypes';
import CustomButton from '../../../common/components/customButton';
import Colors from '../../../common/styles/Colors';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {SET_CALL_TASK_SCHEDULE} from '../../../common/constants/ActionTypes';
import {CallModal} from '../../../common/types/schedule';
import {showToast} from '../../../common/utils/AlertUtils';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export default function CallTask() {
  const {
    control,
    watch,
    reset,
    formState: {},
  } = useForm({
    defaultValues: {CountDown: '', Number: '', CallerId: ''},
    mode: 'onChange',
  });

  const [avatar, setAvatar] = useState<any>(null);

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
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

          // console.log(response.assets[0]);
          setAvatar(response.assets[0]);
        }
      },
    );
  }
  function handleScheduleCallTask() {
    dispatch({
      type: SET_CALL_TASK_SCHEDULE,
      payload: {
        id: uuidv4(),
        avatar: avatar.uri,
        callerId: control._formValues.CallerId,
        number: control._formValues.Number,
        countdown: String(control._formValues.CountDown),
        createdAt: String(new Date()),
      } as CallModal,
    });
    reset();
    setAvatar(null);
    showToast('Task scheduled!');
  }
  return (
    <PageSkeleton hasHeader={false} headerTitle="">
      <View style={styles.Container}>
        <TouchableOpacity
          style={[styles.uploadContainer, {position: 'relative'}]}
          onPress={() => handleAvatarSelection()}>
          {!avatar ? (
            <>
              <Icon size={32} color="black" name="add-photo-alternate" />
              <Text>Photo</Text>
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
              handleScheduleCallTask();
            }}
            title={'Schedule'}
            buttonStyle={{
              width: '100%',
              marginTop: scaleSize(20),
              backgroundColor: Colors.GREEN_COLOR,
            }}
            buttonText={{color: 'white'}}
          />
        </View>
      </View>
    </PageSkeleton>
  );
}
