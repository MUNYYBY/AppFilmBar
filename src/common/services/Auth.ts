import auth from '@react-native-firebase/auth';
import {reset} from '../utils/NavigatorUtils';
import {NavScreenTags} from '../constants/NavScreenTags';
import {AddUser, DeleteRecord} from './Cloud';
import moment from 'moment';
import {StreamVideoRN} from '@stream-io/video-react-native-sdk';

export const SignIn = async (email: string, password: string) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then((result: any) => {
      console.log('User account created & signed in!');
      return {data: result};
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        return {error: 'That email address is already in use!'};
      } else if (error.code === 'auth/invalid-email') {
        return {error: 'That email address is invalid!'};
      } else if (error.code === 'auth/user-not-found') {
        return {error: 'That email or password is incorrect!'};
      } else {
        return {error};
      }
    });
};

import firestore from '@react-native-firebase/firestore'; // assuming you're using Firebase Firestore for storing user data

export const SignUp = async (
  email: string,
  password: string,
  name: string,
  phoneNumber: string,
) => {
  // Check if the phone number is already in use
  const phoneNumberExists = await firestore()
    .collection('Users')
    .where('phoneNumber', '==', phoneNumber)
    .get();

  if (!phoneNumberExists.empty) {
    console.log('That phone number is already in use!');
    return {error: 'That phone number is already in use!'};
  }

  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials: any) => {
      return userCredentials.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          auth().currentUser?.sendEmailVerification();
          return AddUser({
            email,
            name,
            uid: userCredentials.user.uid,
            friends: [],
            phoneNumber,
            createdOn: moment().toString(),
          }).then((res: any) => {
            if (res.data) {
              console.log('User account created & signed in!');
              return {data: userCredentials};
            } else {
              return {error: res.error};
            }
          });
        })
        .catch((err: any) => {
          return {error: err};
        });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        return {error: 'That email address is already in use!'};
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        return {error: 'That email address is invalid!'};
      } else {
        return {error};
      }
    });
};

export const Logout = async () => {
  await StreamVideoRN.onPushLogout();
  return auth()
    .signOut()
    .then(() => {
      console.log('User signed out!');
      reset(NavScreenTags.SIGN_IN);
    });
};

export const PasswordResetEmailSend = async (email: string) => {
  return auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      return {data: 'Password reset email sent!'};
    })
    .catch((err: any) => {
      return {error: 'Failed to send password reset email!', err};
    });
};

export const ChangePasswordFunc = async (password: string) => {
  return auth()
    .currentUser?.updatePassword(password)
    .then(() => {
      return {data: 'Password changed sucessfully!'};
    })
    .catch((err: any) => {
      return {error: 'Failed to change password!', err};
    });
};
export const DeleteUserAccount = async () => {
  const user: any = auth()?.currentUser?.uid;
  return auth()
    .currentUser?.delete()
    .then(async () => {
      return DeleteRecord(user).then((res: any) => {
        if (res.data) {
          return {data: 'User deleted sucessfully!'};
        } else {
          return {error: res.error};
        }
      });
    })
    .catch((err: any) => {
      return {error: 'Failed to delete user!', err};
    });
};
export const onAuthStateChanged = (handleUser: any) => {
  auth().onAuthStateChanged(handleUser);
};
