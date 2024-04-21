/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {onAuthStateChanged} from '../../../common/services/Auth';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomInput from '../../../common/components/customInput';
import {InputTypes} from '../../../common/constants/InputTypes';
import {FIELD_NAMES} from '../../../common/constants/FieldNames';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';
import CustomErrorText from '../../../common/components/customErrorText';
import CustomButton from '../../../common/components/customButton';
import DropDownPicker from 'react-native-dropdown-picker';
import SwitchSelector from 'react-native-switch-selector';
import JoinCall from '../Join/JoinCall';

const options = [
  {label: 'Create Channel ', value: 0},
  {label: 'Join Channel', value: 1},
];

export default function Contacts() {
  const [step, setStep] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        marginTop: scaleSize(50),
        width: '100%',
      }}>
      <View style={{marginHorizontal: 20}}>
        <SwitchSelector
          options={options}
          initial={step}
          onPress={(item: any) => {
            setStep(item);
          }}
          textColor={Colors.BLACK_COLOR} //'#7a44cf'
          selectedColor={Colors.BLACK_COLOR}
          buttonColor={Colors.PRIMARY}
          backgroundColor={'#EEEEEE'}
          textStyle={{fontSize: scaleSize(12)}}
          selectedTextStyle={{fontSize: scaleSize(12)}}
          height={scaleSize(40)}
        />
      </View>
      {step === 0 ? <Create /> : <JoinCall />}
    </View>
  );
}

function Create() {
  const {
    control,
    watch,
    setError,
    clearErrors,
    formState: {errors, isValid},
  } = useForm({mode: 'onChange'});

  //** ref */
  let roomNameRef = useRef();
  let roomDescRef = useRef();

  //** states */
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Video Call');
  const [items, setItems] = useState([
    {label: 'Video Call', value: 'Video Call'},
    {label: 'Audio Call', value: 'Audio Call'},
  ]);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  function handleSubmit() {
    clearErrors('Credentials');

    navigate(NavScreenTags.REAL_CALL, {
      channelName: control._formValues.RoomName,
      uid: user.uid,
      userAccount: user.displayName,
      type: value,
    });
  }
  return (
    <PageSkeleton headerTitle="Create Room" hasHeader={false}>
      <View style={{flexGrow: 1}}>
        <View style={{marginTop: scaleSize(0), zIndex: 1000}}>
          <Text style={{marginBottom: 7.5, color: Colors.WHITE_COLOR}}>
            Whats the room details?
          </Text>
          <CustomInput
            placeholder={'Channel Name'}
            type={InputTypes.TEXT_INPUT}
            control={control}
            name={'RoomName'}
            editable={true}
            returnKeyType={'next'}
            forwordRef={(input: any): any => {
              roomNameRef = input;
            }}
            onSubmitEditing={(e: any) => {
              roomDescRef.focus(e);
            }}
            shouldShowIcon={
              watch(FIELD_NAMES.ROOM_NAME) !== undefined ? true : false
            }
            rules={{
              required: 'Channel Name is required',
            }}
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: Colors.WHITE_COLOR,
              borderRadius: scaleSize(5),
              height: scaleSize(55),
            }}
            textStyle={{color: Colors.BLACK_COLOR}}
            containerStyle={{
              backgroundColor: Colors.WHITE_COLOR,
              borderRadius: scaleSize(5),
            }}
            zIndex={1000}
            labelStyle={{
              color: Colors.BLACK_COLOR,
            }}
          />
        </View>
        {errors.Credentials && (
          <CustomErrorText
            errorText={errors.Credentials?.message}
            isError={!!errors.Credentials}
          />
        )}
        <View style={{marginTop: 10}}>
          <CustomButton
            title="Create Channel"
            onPress={() => {
              handleSubmit();
            }}
            shouldEnable={isValid}
            loading={loading}
          />
        </View>
      </View>
    </PageSkeleton>
  );
}
