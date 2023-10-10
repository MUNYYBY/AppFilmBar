/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import PageSkeleton from '../../common/hoc/pageSkeleton';
import styles from './styles';
import CustomButton from '../../common/components/customButton';
import {useForm} from 'react-hook-form';
import CustomInput from '../../common/components/customInput';
import {InputTypes} from '../../common/constants/InputTypes';
import {FIELD_NAMES} from '../../common/constants/FieldNames';
import {passwordValidate} from '../../common/utils/ValidationUtils';
import {scaleFontSize, scaleSize} from '../../common/utils/ScaleSheetUtils';
import Colors from '../../common/styles/Colors';
import {navigate} from '../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import CustomErrorText from '../../common/components/customErrorText';

export default function Login() {
  const {
    control,
    watch,
    setError,
    clearErrors,
    formState: {errors, isValid},
  } = useForm({mode: 'onChange'});

  //** States */

  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let emailRef = useRef<any>();
  let passwordRef = useRef<any>();

  // function handle() {
  //   setLoading(true);
  //   clearErrors('Credentials');
  //   SignIn(control._formValues.email, control._formValues.password)
  //     .then((result: any) => {
  //       if (result.data) {
  //         console.log(result);
  //         setLoading(false);
  //         navigate(NavScreenTags.DASHBOARD_STACK);
  //       } else {
  //         setLoading(false);
  //         setError('Credentials', {
  //           type: 'manual',
  //           message: result.error,
  //         });
  //       }
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //       setLoading(false);
  //       setError('Credentials', {
  //         type: 'manual',
  //         message: err,
  //       });
  //     });
  // }

  return (
    <PageSkeleton hasHeader={false} headerTitle="">
      <View style={styles.LoginContainer}>
        <Text style={styles.textMain}>Login</Text>
        <View style={{marginTop: scaleSize(30)}}>
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
            onSubmitEditing={(e: any) => {
              passwordRef.focus(e);
            }}
            shouldShowIcon={
              watch(FIELD_NAMES.EMAIL) !== undefined ? true : false
            }
            rules={{
              required: 'Email is required',
            }}
            shouldAutoFocus={true}
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
            isError={!!errors.Credentials}
          />
        )}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginVertical: scaleSize(20),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate(NavScreenTags.FORGOT_PASSWORD);
            }}>
            <Text style={[{color: Colors.BLACK_COLOR}, styles.textSec]}>
              Forgot password ?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Log in"
          // shouldEnable={isValid}
          onPress={() => {
            navigate(NavScreenTags.HOME);
          }}
          loading={loading}
        />
        <View
          style={[
            {
              width: '100%',
              marginTop: scaleSize(30),
            },
            styles.centerAlign,
          ]}>
          <Text
            style={{
              fontSize: scaleFontSize(18),
              marginVertical: scaleSize(20),
              color: Colors.BLACK_COLOR,
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate(NavScreenTags.SIGN_UP);
            }}>
            <Text
              style={{
                marginLeft: scaleSize(5),
                fontSize: scaleFontSize(18),
                marginVertical: scaleSize(20),
                color: Colors.BLACK_COLOR,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageSkeleton>
  );
}
