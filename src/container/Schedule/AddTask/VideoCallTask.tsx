/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import CustomInput from '../../../common/components/customInput';
import {useForm} from 'react-hook-form';
import {InputTypes} from '../../../common/constants/InputTypes';

export default function VideoCallTask() {
  const {
    control,
    watch,
    formState: {},
  } = useForm({mode: 'onChange'});
  return (
    <PageSkeleton hasHeader={false} headerTitle="">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <View style={styles.videoUploadContainer}>
            <Icon size={40} color="black" name="video-outline" />
            <Text>Photo</Text>
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
        </View>
      </ScrollView>
    </PageSkeleton>
  );
}
