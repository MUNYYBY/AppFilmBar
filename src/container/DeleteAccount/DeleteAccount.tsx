/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import PageSkeleton from '../../common/hoc/pageSkeleton';
import styles from './styles';
import CustomButton from '../../common/components/customButton';
import {useForm} from 'react-hook-form';
import {scaleFontSize, scaleSize} from '../../common/utils/ScaleSheetUtils';

import CustomErrorText from '../../common/components/customErrorText';
import {showAlert, showToast} from '../../common/utils/AlertUtils';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../common/styles/Colors';

export default function DeleteAccount() {
  const {
    setError,
    clearErrors,
    formState: {errors},
  } = useForm({mode: 'onChange'});

  //** States */

  const [loading, setLoading] = useState(false);

  // function handle() {
  //   setLoading(true);
  //   clearErrors('Credentials');
  //   DeleteUserAccount()
  //     .then((result: any) => {
  //       if (result.data) {
  //         console.log(result);
  //         setLoading(false);
  //         showToast(result.data);
  //         reset(NavScreenTags.AUTH_STACK);
  //       } else {
  //         setLoading(false);
  //         showToast('Failed please check errors!');
  //         setError('Credentials', {
  //           type: 'manual',
  //           message: result.err,
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
    <PageSkeleton hasHeader={true} headerTitle="Delete Account">
      <View style={styles.LoginContainer}>
        <View style={[{marginTop: scaleSize(30)}, styles.centerAlign]}>
          <Icon2
            name="warning-amber"
            color={Colors.WHITE_COLOR_85}
            size={100}
          />
          <Text
            style={{
              marginBottom: 7.5,
              fontSize: scaleFontSize(18),
              textAlign: 'center',
              color: Colors.WHITE_COLOR,
            }}>
            Are you sure you want to delete this account? This operation is
            irreversible and you will not be able to recover or access this
            account anymore!
          </Text>
        </View>
        {errors.Credentials && (
          <CustomErrorText
            errorText={errors.Credentials?.message}
            isError={!!errors.Credentials}
          />
        )}
        <View style={{marginTop: scaleSize(10)}}>
          <CustomButton
            title="Delete Account"
            onPress={() => {
              showAlert(
                'Delete Account',
                'We are sad to see you go, are you sure you want to delete this account?',
                'Cancel',
                'Yes, I want to leave',
                () => {},
              );
            }}
            loading={loading}
          />
        </View>
      </View>
    </PageSkeleton>
  );
}
