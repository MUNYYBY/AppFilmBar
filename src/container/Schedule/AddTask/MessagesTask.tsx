/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconOcti from 'react-native-vector-icons/Octicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import CustomInput from '../../../common/components/customInput';
import {useForm} from 'react-hook-form';
import {InputTypes} from '../../../common/constants/InputTypes';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../../../common/styles/Colors';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomErrorText from '../../../common/components/customErrorText';
import CustomButton from '../../../common/components/customButton';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';
import {showToast} from '../../../common/utils/AlertUtils';
import {MessagesModal} from '../../../common/types/schedule';
import {SET_MESSAGE_TASK_SCHEDULE} from '../../../common/constants/ActionTypes';

export default function MessagesTask() {
  const {
    control,
    watch,
    setError,
    clearErrors,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {CountDown: '', Messages: '', CallerId: ''},
    mode: 'onChange',
  });

  //** states */
  const [avatar, setAvatar] = React.useState<any>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const [messages, setMessages] = useState<Array<any>>([]);
  const [items, setItems] = React.useState<Array<object>>([
    {value: 'Send', label: 'Send'},
    {value: 'Recieve', label: 'Recieve'},
  ]);

  //** redux */
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

  function handleMessageSave() {
    clearErrors('root');
    if (!value) {
      setError('root', {type: 'manual', message: 'Please select message type'});
      return false;
    }
    if (!control._formValues.Messages) {
      setError('root', {
        type: 'manual',
        message: 'Please enter message content',
      });
      return false;
    }
    console.log(control._formValues.Messages);
    setMessages((prev: any) => [
      ...prev,
      {
        id: uuidv4(),
        message: control._formValues.Messages,
        type: value,
        createdAt: String(new Date()),
      },
    ]);
    setValue('');
  }

  function handleSaveMessageTask() {
    clearErrors('root');
    if (!control._formValues.CountDown || !control._formValues.CallerId) {
      setError('root', {
        type: 'manual',
        message: 'Please enter all the fields',
      });
      return false;
    }
    dispatch({
      type: SET_MESSAGE_TASK_SCHEDULE,
      payload: {
        id: uuidv4(),
        avatar: avatar ? avatar.uri : null,
        callerId: control._formValues.CallerId,
        countdown: String(control._formValues.CountDown),
        messages: messages,
        createdAt: String(new Date()),
      } as MessagesModal,
    });
    reset();
    setAvatar(null);
    setMessages([]);
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
                <Icon size={32} color="black" name="add-photo-alternate" />
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
          {messages.length > 0 && (
            <View style={{width: '100%', marginTop: scaleSize(20)}}>
              <Text style={styles.BoldText}>Messages</Text>
              {messages.map((message: any, index: number) => (
                <View
                  key={index}
                  style={{
                    marginTop: scaleSize(5),
                    backgroundColor: '#EEEEEE',
                    borderRadius: 12,
                    borderWidth: scaleSize(1.25),
                    borderColor: Colors.INPUT_BORDER,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                      {message.type}
                    </Text>
                    <Text style={{color: 'black'}}>{message.message}</Text>
                  </View>
                  <TouchableOpacity
                    style={{opacity: 0.55}}
                    onPress={() =>
                      setMessages(
                        messages.filter((item: any) => item.id !== message.id),
                      )
                    }>
                    <IconEntypo name="cross" size={28} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
          <View style={{marginTop: scaleSize(10), width: '100%'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text style={styles.BoldText}>Messages Task</Text>
              <View
                style={{
                  width: 100,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                }}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Action type for message"
                  style={{
                    height: scaleSize(55),
                    width: 150,
                    borderColor: 'white',
                    borderWidth: 0,
                    paddingHorizontal: scaleSize(15),
                  }}
                  textStyle={{color: Colors.BLACK_COLOR}}
                  dropDownContainerStyle={{
                    borderColor: Colors.INPUT_BORDER,
                    backgroundColor: Colors.INPUT_BACKGROUND,
                    paddingBottom: scaleSize(10),
                    paddingLeft: scaleSize(5),
                    width: 130,
                  }}
                  labelStyle={{
                    color: Colors.GRAY_COLOR,
                  }}
                  placeholderStyle={{
                    color: Colors.GRAY_COLOR,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <CustomInput
                placeholder={'Message Content'}
                type={InputTypes.TEXT_INPUT}
                control={control}
                name={'Messages'}
                returnKeyType={'done'}
                shouldShowIcon={watch('Messages') !== undefined ? true : false}
              />
              <TouchableOpacity
                style={{marginLeft: 10, opacity: 0.55}}
                onPress={() => handleMessageSave()}>
                <IconOcti name="plus" color={Colors.BLACK_COLOR} size={42} />
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
          </View>
          <View style={{width: '100%'}}>
            <CustomButton
              onPress={() => {
                handleSaveMessageTask();
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
