import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

export const SendMessage = async (
  user: any,
  receiverData: any,
  chatMessage: string,
) => {
  try {
    await firestore()
      .collection(`Users/${user.uid}/chatUsers/${receiverData.uid}/messages`)
      .add({
        username: user.displayName,
        messageUserId: user.uid,
        message: chatMessage,
        timestamp: new Date(),
        created_at: moment().toString(),
      })
      .then((res: any) => {
        return {data: res};
      })
      .catch((err: any) => {
        console.log(err);
        return {error: err};
      });
    await firestore()
      .collection(`Users/${receiverData.uid}/chatUsers/${user.uid}/messages`)
      .add({
        username: user.displayName,
        messageUserId: user.uid,
        message: chatMessage,
        timestamp: new Date(),
      })
      .then((res: any) => {
        return {data: res};
      })
      .catch((err: any) => {
        console.log(err);
        return {error: err};
      });
  } catch (error) {
    console.log(error);
  }
};
