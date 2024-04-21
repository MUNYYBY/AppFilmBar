/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
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
import {showToast} from '../../../common/utils/AlertUtils';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {TextInput} from 'react-native';
import CustomErrorText from '../../../common/components/customErrorText';
import {KEYBOARD_OFFSET} from '../../../common/constants/KeyboardOffset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../../common/constants/StorageKeysTags';

export default function CallTask() {
  const {
    control,
    watch,
    reset,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm({
    defaultValues: {CountDown: '', Number: '', CallerId: ''},
    mode: 'onChange',
  });

  const [avatar, setAvatar] = useState<any>(null);
  const [minutes, setMinutes] = useState<any>(null);
  const [seconds, setSeconds] = useState<any>(null);

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
  function handleScheduleCallTask() {
    clearErrors('root');
    if (!minutes && !seconds) {
      return setError('root', {
        type: 'manual',
        message: 'Please enter countdown value',
      });
    }
    AsyncStorage.setItem(
      StorageKeysTags.Calls,
      JSON.stringify({
        id: uuidv4(),
        avatar: avatar ? avatar.uri : null,
        callerId: control._formValues.CallerId,
        number: control._formValues.Number,
        minutes: minutes ?? 0,
        seconds: seconds ?? 0,
        createdAt: String(new Date()),
      }),
    );
    setMinutes(null);
    setSeconds(null);
    reset();
    setAvatar(null);
    showToast('Task scheduled!');
  }
  return (
    <PageSkeleton hasHeader={false} headerTitle="">
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={KEYBOARD_OFFSET}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Container}>
            <TouchableOpacity
              style={[styles.uploadContainer, {position: 'relative'}]}
              onPress={() => handleAvatarSelection()}>
              {!avatar ? (
                <>
                  <Icon
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
                  style={{
                    fontSize: 30,
                    fontWeight: '700',
                    marginHorizontal: 10,
                  }}>
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
                type={InputTypes.TEXT_INPUT}
                control={control}
                name={'Number'}
                returnKeyType={'done'}
                rules={{
                  required: 'Number is required',
                }}
                shouldShowIcon={watch('Number') !== undefined ? true : false}
              />
            </View>
            <View style={{marginTop: scaleSize(20)}}>
              {errors.root && (
                <CustomErrorText
                  errorText={errors.root?.message}
                  isError={errors.root ? true : false}
                />
              )}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </PageSkeleton>
  );
}
