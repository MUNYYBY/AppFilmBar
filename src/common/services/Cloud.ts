import firestore from '@react-native-firebase/firestore';

export const AddRoom = async (roomData: any) => {
  return firestore()
    .collection('Rooms')
    .doc(roomData.roomId)
    .set(roomData)
    .then((res: any) => {
      return {data: res};
    })
    .catch((err: any) => {
      console.log(err);
      return {error: err};
    });
};

export const GetRooms = async () => {
  const docs: any = [];
  return firestore()
    .collection('Rooms')
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
export const DeleteRoom = async (roomId: string) => {
  return firestore()
    .collection('Rooms')
    .doc(roomId)
    .delete()
    .then(() => {
      console.log('Room deleted!');
      return {data: 'Room deleted sucessfully!'};
    })
    .catch((err: any) => {
      return {error: err};
    });
};

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
