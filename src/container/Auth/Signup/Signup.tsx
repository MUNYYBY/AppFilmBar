/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import styles from './styles';
import CustomButton from '../../../common/components/customButton';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../common/components/customInput';
import {InputTypes} from '../../../common/constants/InputTypes';
import {FIELD_NAMES} from '../../../common/constants/FieldNames';
import {passwordValidate} from '../../../common/utils/ValidationUtils';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Colors from '../../../common/styles/Colors';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import CustomErrorText from '../../../common/components/customErrorText';
import {showToast} from '../../../common/utils/AlertUtils';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {KEYBOARD_OFFSET} from '../../../common/constants/KeyboardOffset';
import {SignUp} from '../../../common/services/Auth';

export default function Signup() {
  const {
    control,
    watch,
    setError,
    clearErrors,
    formState: {errors, isValid},
  } = useForm({mode: 'onChange'});

  //** States */

  const [loading, setLoading] = useState(false);

  let emailRef = useRef();
  let passwordRef = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();

  function handle() {
    setLoading(true);
    clearErrors('Credentials');
    SignUp(
      control._formValues.email,
      control._formValues.password,
      control._formValues.name,
      control._formValues.phoneNumber,
    )
      .then((result: any) => {
        console.log(result);
        if (result.data) {
          setLoading(false);
          showToast('Sucessfully created account!');
          navigate(NavScreenTags.HOME);
        } else {
          setLoading(false);
          setError('Credentials', {
            type: 'manual',
            message: result.error,
          });
        }
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
        setError('Credentials', {
          type: 'manual',
          message: err,
        });
      });
  }
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={false} headerTitle="">
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 5}>
            <View style={styles.LoginContainer}>
              <Text style={styles.textMain}>Sign up</Text>
              <View style={{marginTop: scaleSize(30)}}>
                <CustomInput
                  placeholder={'Name'}
                  type={InputTypes.TEXT_INPUT}
                  control={control}
                  name={FIELD_NAMES.NAME}
                  editable={true}
                  returnKeyType={'next'}
                  forwordRef={(input: any): any => {
                    firstNameRef = input;
                  }}
                  shouldShowIcon={
                    watch(FIELD_NAMES.NAME) !== undefined ? true : false
                  }
                  rules={{
                    required: 'Name is required',
                  }}
                />
                <CustomInput
                  placeholder={'Email'}
                  type={InputTypes.TEXT_INPUT}
                  control={control}
                  name={FIELD_NAMES.EMAIL}
                  editable={true}
                  returnKeyType={'next'}
                  forwordRef={(input: any): any => {
                    emailRef = input;
                  }}
                  shouldShowIcon={
                    watch(FIELD_NAMES.EMAIL) !== undefined ? true : false
                  }
                  rules={{
                    required: 'Email is required',
                  }}
                />
                <CustomInput
                  placeholder={'Phone Number'}
                  type={InputTypes.TEXT_INPUT}
                  control={control}
                  name={FIELD_NAMES.PHONE_NUMBER}
                  editable={true}
                  returnKeyType={'next'}
                  forwordRef={(input: any): any => {
                    emailRef = input;
                  }}
                  shouldShowIcon={
                    watch(FIELD_NAMES.PHONE_NUMBER) !== undefined ? true : false
                  }
                  rules={{
                    required: 'Phone is required',
                  }}
                />
                <CustomInput
                  placeholder={'Password'}
                  type={InputTypes.PASSWORD_INPUT}
                  secureTextEntry
                  control={control}
                  name={FIELD_NAMES.PASSWORD}
                  returnKeyType={'done'}
                  rules={{
                    validate: passwordValidate,
                  }}
                  forwordRef={(input: any): any => {
                    passwordRef = input;
                  }}
                  shouldShowIcon={
                    watch(FIELD_NAMES.PASSWORD) !== undefined ? true : false
                  }
                />
              </View>
              {errors.Credentials && (
                <CustomErrorText
                  errorText={errors.Credentials?.message}
                  isError={errors.Credentials}
                />
              )}
              <CustomButton
                title="Sign up"
                shouldEnable={isValid}
                onPress={() => {
                  handle();
                }}
                buttonStyle={{marginTop: scaleSize(10)}}
                loading={loading}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: scaleSize(30),
                }}>
                <Text
                  style={{
                    fontSize: scaleFontSize(18),
                    marginVertical: scaleSize(20),
                    color: Colors.BLACK_COLOR,
                  }}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigate(NavScreenTags.SIGN_IN);
                  }}>
                  <Text
                    style={{
                      marginLeft: scaleSize(5),
                      fontSize: scaleFontSize(18),
                      marginVertical: scaleSize(20),
                      color: Colors.PRIMARY,
                    }}>
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageSkeleton>
    </>
  );
}
