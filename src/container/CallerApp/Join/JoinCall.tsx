/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import moment from 'moment';
import {onAuthStateChanged} from '../../../common/services/Auth';
import {uid} from 'uid';
import {AddRoom} from '../../../common/services/Cloud';
import {showToast} from '../../../common/utils/AlertUtils';
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

export default function JoinCall() {
  const {
    control,
    watch,
    setError,
    clearErrors,
    formState: {errors, isValid},
  } = useForm({mode: 'onChange'});

  //** ref */
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
            name={FIELD_NAMES.ROOM_NAME}
            editable={true}
            returnKeyType={'next'}
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
            title="Join Channel"
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
