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
import {scaleFontSize, scaleSize} from '../../common/utils/ScaleSheetUtils';
import {navigate} from '../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import CustomErrorText from '../../common/components/customErrorText';
import {showToast} from '../../common/utils/AlertUtils';
import Colors from '../../common/styles/Colors';

export default function ForgotPassword() {
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

  // function handle() {
  //   setLoading(true);
  //   clearErrors('Credentials');
  //   PasswordResetEmailSend(control._formValues.email)
  //     .then((result: any) => {
  //       if (result.data) {
  //         console.log(result);
  //         setLoading(false);
  //         showToast('Password reset email sent!');
  //         navigate(NavScreenTags.SIGN_IN);
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
    <PageSkeleton hasHeader={true} headerTitle="Forgot Password">
      <View style={styles.LoginContainer}>
        <View style={{marginTop: scaleSize(30), marginBottom: scaleSize(10)}}>
          <Text
            style={{
              marginBottom: 7.5,
              fontSize: scaleFontSize(18),
              color: Colors.WHITE_COLOR,
            }}>
            What's your email?
          </Text>
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
            shouldAutoFocus={true}
          />
        </View>
        {errors.Credentials && (
          <CustomErrorText
            errorText={errors.Credentials?.message}
            isError={!!errors.Credentials}
          />
        )}
        <CustomButton
          title="Submit"
          shouldEnable={isValid}
          onPress={() => {
            // handle();
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
              fontSize: scaleFontSize(14),
              marginVertical: scaleSize(10),
              marginHorizontal: scaleSize(20),
              textAlign: 'center',
              color: Colors.WHITE_COLOR,
            }}>
            Upon submission an email will be sent where you will be able to
            change your password!
          </Text>
        </View>
      </View>
    </PageSkeleton>
  );
}
