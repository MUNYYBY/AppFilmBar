/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
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
import {showToast} from '../../../common/utils/AlertUtils';
import {TextInput} from 'react-native';
import {KEYBOARD_OFFSET} from '../../../common/constants/KeyboardOffset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../../common/constants/StorageKeysTags';

export default function MessagesTask() {
  const {
    control,
    watch,
    setError,
    clearErrors,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      CountDown: '',
      Messages: '',
      CallerId: '',
      RecentMessages: '',
    },
    mode: 'onChange',
  });

  //** states */
  const [avatar, setAvatar] = React.useState<any>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const [open1, setOpen1] = React.useState<boolean>(false);
  const [value1, setValue1] = React.useState<string>('');
  const [items, setItems] = React.useState<Array<object>>([
    {value: 'Send', label: 'Send'},
    {value: 'Recieve', label: 'Recieve'},
  ]);
  const [messages, setMessages] = useState<Array<any>>([]);
  const [recentMessages, setRecentMessages] = useState<Array<any>>([]);
  const [minutes, setMinutes] = useState<any>();
  const [seconds, setSeconds] = useState<any>();

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
  function handleRecentMessageSave() {
    clearErrors('root');
    if (!value1) {
      setError('root', {
        type: 'manual',
        message: 'Please select recent message type',
      });
      return false;
    }
    if (!control._formValues.RecentMessages) {
      setError('root', {
        type: 'manual',
        message: 'Please enter recent message content',
      });
      return false;
    }
    setRecentMessages((prev: any) => [
      ...prev,
      {
        id: uuidv4(),
        message: control._formValues.RecentMessages,
        type: value1,
        createdAt: String(new Date()),
      },
    ]);
    setValue1('');
  }

  function handleSaveMessageTask() {
    clearErrors('root');
    if (!minutes && !seconds) {
      return setError('root', {
        type: 'manual',
        message: 'Please enter countdown value',
      });
    }
    if (!control._formValues.CallerId) {
      setError('root', {
        type: 'manual',
        message: 'Please enter all the fields',
      });
      return false;
    }
    AsyncStorage.setItem(
      StorageKeysTags.Messages,
      JSON.stringify({
        id: uuidv4(),
        avatar: avatar ? avatar.uri : null,
        callerId: control._formValues.CallerId,
        minutes: minutes ?? 0,
        seconds: seconds ?? 0,
        messages: messages,
        recentMessages: recentMessages,
        createdAt: String(new Date()),
      }),
    );
    setMinutes(null);
    setSeconds(null);
    reset();
    setAvatar(null);
    setMessages([]);
    setRecentMessages([]);
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
                        style={{
                          color: Colors.BLACK_COLOR,
                          fontSize: 18,
                          fontWeight: '500',
                        }}>
                        {message.type}
                      </Text>
                      <Text style={{color: Colors.BLACK_COLOR}}>
                        {message.message}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{opacity: 0.55}}
                      onPress={() =>
                        setMessages(
                          messages.filter(
                            (item: any) => item.id !== message.id,
                          ),
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
                      backgroundColor: 'transparent',
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
                  shouldShowIcon={
                    watch('Messages') !== undefined ? true : false
                  }
                />
                <TouchableOpacity
                  style={{marginLeft: 10, opacity: 0.55}}
                  onPress={() => handleMessageSave()}>
                  <IconOcti name="plus" color={Colors.BLACK_COLOR} size={42} />
                </TouchableOpacity>
              </View>
            </View>
            {recentMessages.length > 0 && (
              <View style={{width: '100%', marginTop: scaleSize(20)}}>
                <Text style={styles.BoldText}>Recent Messages</Text>
                {recentMessages.map((message: any, index: number) => (
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
                        style={{
                          color: Colors.BLACK_COLOR,
                          fontSize: 18,
                          fontWeight: '500',
                        }}>
                        {message.type}
                      </Text>
                      <Text style={{color: Colors.BLACK_COLOR}}>
                        {message.message}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{opacity: 0.55}}
                      onPress={() =>
                        setRecentMessages(
                          recentMessages.filter(
                            (item: any) => item.id !== message.id,
                          ),
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
                <Text style={styles.BoldText}>Recent Messages</Text>
                <View
                  style={{
                    width: 100,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                  }}>
                  <DropDownPicker
                    open={open1}
                    value={value1}
                    items={items}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems}
                    placeholder="Action type for message"
                    style={{
                      height: scaleSize(55),
                      width: 150,
                      borderColor: 'white',
                      borderWidth: 0,
                      paddingHorizontal: scaleSize(15),
                      backgroundColor: 'transparent',
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
                  placeholder={'Add a recent message'}
                  type={InputTypes.TEXT_INPUT}
                  control={control}
                  name={'RecentMessages'}
                  returnKeyType={'done'}
                  shouldShowIcon={
                    watch('RecentMessages') !== undefined ? true : false
                  }
                />
                <TouchableOpacity
                  style={{marginLeft: 10, opacity: 0.55}}
                  onPress={() => handleRecentMessageSave()}>
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
      </KeyboardAvoidingView>
    </PageSkeleton>
  );
}
