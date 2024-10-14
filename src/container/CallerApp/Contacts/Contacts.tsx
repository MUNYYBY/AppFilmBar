/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import CustomContact from '../../../common/components/CustomContact/CustomContact';
import {GetUsers} from '../../../common/services/Cloud';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function Contacts() {
  const [data, setData] = useState<any>([]);

  const getFriendsData = async () => {
    const currentUser = auth().currentUser;

    if (!currentUser) {
      console.error('No current user logged in');
      return;
    }

    const currentUserUid = currentUser.uid;

    try {
      const currentUserDoc = await firestore()
        .collection('Users')
        .doc(currentUserUid)
        .get();

      if (currentUserDoc.exists) {
        const currentUserData = currentUserDoc.data();
        const friendsUids = currentUserData?.friends || []; // Assuming the 'friends' field contains UIDs of friends

        // Check if there are any friends
        if (friendsUids.length === 0) {
          console.log('No friends found');
          return;
        }

        // Fetch data for each friend UID
        const friendsDataPromises = friendsUids.map(
          async (friendUid: string) => {
            const friendDoc = await firestore()
              .collection('Users')
              .doc(friendUid)
              .get();
            return friendDoc.exists ? friendDoc.data() : null;
          },
        );

        // Wait for all promises to resolve
        const friendsData = await Promise.all(friendsDataPromises);

        // Filter out any null values (in case a friend's document does not exist)
        const validFriendsData = friendsData.filter(friend => friend !== null);

        // Concatenate the data and store it in the 'data' state
        setData(validFriendsData);
      } else {
        console.error('Current user document does not exist');
      }
    } catch (error) {
      console.error('Error fetching friends data:', error);
    }
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  return (
    <ScrollView
      style={{
        marginTop: scaleSize(20),
        width: '100%',
      }}>
      <View style={{marginHorizontal: 20}}>
        {data.map((item: any, index: number) => {
          return (
            <View key={index}>
              <CustomContact contact={item} isCall />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
