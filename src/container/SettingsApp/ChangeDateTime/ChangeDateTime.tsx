import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../common/components/customInput';
import {InputTypes} from '../../../common/constants/InputTypes';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {useDispatch} from 'react-redux';
import {SET_DATE_AND_TIME} from '../../../common/constants/ActionTypes';
import CustomButton from '../../../common/components/customButton';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../../common/constants/StorageKeysTags';

export default function ChangeDateTime() {
  const {
    control,
    watch,
    formState: {},
  } = useForm({mode: 'onChange'});

  //** redux */
  const dispatch = useDispatch();

  //** refs */
  let timeRef = React.useRef<any>();
  let dateRef = React.useRef<any>();

  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Date/Time">
        <View style={{marginTop: scaleSize(20)}}>
          <Text style={{fontSize: scaleSize(20), fontWeight: '500'}}>Time</Text>
          <CustomInput
            placeholder={'Time'}
            type={InputTypes.DATE_PICKER}
            control={control}
            name={'Time'}
            forwordRef={(input: any): any => {
              timeRef = input;
            }}
            rules={{
              required: 'Time is required',
            }}
            shouldAutoFocus={true}
            shouldShowIcon={watch('time') !== undefined ? true : false}
          />
        </View>
        <View style={{marginTop: scaleSize(20)}}>
          <Text style={{fontSize: scaleSize(20), fontWeight: '500'}}>Date</Text>
          <CustomInput
            placeholder={'Date'}
            type={InputTypes.DATE_PICKER}
            control={control}
            name={'Date'}
            forwordRef={(input: any): any => {
              dateRef = input;
            }}
            rules={{
              required: 'Date is required',
            }}
            shouldAutoFocus={true}
            shouldShowIcon={watch('Date') !== undefined ? true : false}
          />
        </View>
        <View style={{marginTop: scaleSize(20)}} />
        <CustomButton
          title="Update"
          onPress={() => {
            dispatch({
              type: SET_DATE_AND_TIME,
              payload: {
                date: moment(control._formValues.Date).format(),
                time: moment(control._formValues.Time).format(),
              },
            });
            AsyncStorage.setItem(
              StorageKeysTags.Time,
              JSON.stringify({
                date: moment(control._formValues.Date).format(),
                time: moment(control._formValues.Time).format(),
              }),
            );
          }}
        />
      </PageSkeleton>
    </>
  );
}
