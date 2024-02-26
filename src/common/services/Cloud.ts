import firestore from '@react-native-firebase/firestore';

export const AddUser = async (user: any) => {
  return firestore()
    .collection('Users')
    .doc(user.uid)
    .set(user)
    .then(() => {
      return {data: true};
    })
    .catch((err: any) => {
      console.log(err);
      return {error: err};
    });
};
export const GetUsers = async () => {
  const docs: any = [];
  return firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        docs.push(doc.data());
      });
      return {data: docs};
    })
    .catch(err => {
      return {error: err};
    });
};
export const DeleteRecord = async (uid: string) => {
  return firestore()
    .collection('Users')
    .doc(uid)
    .delete()
    .then(() => {
      console.log('User deleted!');
      return {data: true};
    })
    .catch((err: any) => {
      return {error: err};
    });
};
