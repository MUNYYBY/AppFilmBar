import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import CustomInput from '../../../common/components/customInput';
import {InputTypes} from '../../../common/constants/InputTypes';
import CustomButton from '../../../common/components/customButton';
import moment from 'moment';
import {SET_BATTERY} from '../../../common/constants/ActionTypes';

export default function ChangeBatteryPercentage() {
  const {
    control,
    watch,
    formState: {isValid},
  } = useForm({mode: 'onChange'});

  //** redux */
  const dispatch = useDispatch();

  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Battery Percentage">
        <View style={{marginTop: scaleSize(20)}}>
          <Text style={{fontSize: scaleSize(20), fontWeight: '500'}}>
            Battery Percentage
          </Text>
          <CustomInput
            placeholder={'Battery Percentage'}
            type={InputTypes.TEXT_INPUT}
            control={control}
            name={'Battery'}
            rules={{
              required: 'Battery Percentage is required',
            }}
            shouldAutoFocus={true}
            shouldShowIcon={watch('Battery') !== undefined ? true : false}
          />
        </View>
        <View style={{marginTop: scaleSize(20)}} />
        <CustomButton
          title="Update"
          shouldEnable={isValid}
          onPress={() => {
            dispatch({
              type: SET_BATTERY,
              payload: {
                battery: control._formValues.Battery,
              },
            });
          }}
        />
      </PageSkeleton>
    </>
  );
}
