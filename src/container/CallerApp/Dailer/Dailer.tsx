/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../common/styles/Colors';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import firestore from '@react-native-firebase/firestore'; // Assuming you're using Firebase
import auth from '@react-native-firebase/auth';
import {showToast} from '../../../common/utils/AlertUtils';

export default function Dailer() {
  const [loading, setLoading] = useState(false);
  const [userFound, setUserFound] = useState<boolean | any>(false);
  const [typedText, setTypedText] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const searchUser = async (phoneNumber: string) => {
    setLoading(true);

    try {
      const currentUser = auth().currentUser;

      if (!currentUser) {
        console.error('No current user logged in');
        setLoading(false);
        return;
      }

      const userSnapshot = await firestore()
        .collection('Users')
        .where('phoneNumber', '==', phoneNumber)
        .get();

      if (!userSnapshot.empty) {
        // Assuming you're only getting one user with the phone number
        const foundUserDoc = userSnapshot.docs[0];
        const userData = foundUserDoc.data();

        // Ensure the found user is not the current user
        if (foundUserDoc.id !== currentUser.uid) {
          setUserFound(userData); // Store found user's data
        } else {
          console.log('The searched user is the current user.');
          setUserFound(null); // Reset state if the user is the current user
        }
      } else {
        setUserFound(null); // No user found
      }
    } catch (error) {
      console.error('Error searching for user:', error);
      setUserFound(null); // Reset state on error
    } finally {
      setLoading(false);
    }
  };
  const addFriend = async (searchedUserUid: string) => {
    const currentUser = auth().currentUser;

    if (!currentUser) {
      console.error('No current user logged in');
      return {error: 'No current user logged in'};
    }

    const currentUserUid = currentUser.uid;

    try {
      const currentUserDocRef = firestore()
        .collection('Users')
        .doc(currentUserUid);

      // Fetch the current user's document to check the friends array
      const currentUserDoc = await currentUserDocRef.get();

      if (currentUserDoc.exists) {
        const currentUserData = currentUserDoc.data();

        // Check if the searched user is already in the friends array
        if (
          currentUserData.friends &&
          currentUserData.friends.includes(searchedUserUid)
        ) {
          return {message: 'User is already in friends list'};
        }

        // Add searched user's UID to the friends array
        await currentUserDocRef.update({
          friends: firestore.FieldValue.arrayUnion(searchedUserUid),
        });

        console.log('Friend added successfully!');
        showToast('Friend added successfully');
      } else {
        console.error('Current user document does not exist');
        showToast("Current user document does not exist'");
      }
    } catch (error) {
      console.error('Error adding friend:', error);
      showToast('Failed to add friend');
    }
  };

  const handler = (value: any) => {
    const newValue = typedText + value;
    setTypedText(newValue);

    // Clear the debounce timer
    if (debounceTimeout) clearTimeout(debounceTimeout);

    // Set a new debounce timer
    const newTimeout = setTimeout(() => {
      searchUser(newValue);
    }, 500); // Wait for 500ms before searching
    setDebounceTimeout(newTimeout);
  };

  const handlerBackSpace = () => {
    const newValue = typedText.slice(0, -1);
    setTypedText(newValue);

    if (newValue === '') {
      setLoading(false);
      setUserFound(false);
    } else {
      searchUser(newValue);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up the debounce timer on unmount
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {userFound && (
            <Text style={{color: 'black', marginBottom: -20}}>
              {userFound.name}
            </Text>
          )}
          <Text
            style={[
              {
                marginVertical: scaleSize(20),
                fontSize: scaleFontSize(28),
                color: Colors.BLACK_COLOR,
                fontWeight: '400',
                textAlign: 'center',
              },
            ]}>
            {typedText}
          </Text>
        </View>
        {loading && <ActivityIndicator />}
        {userFound && (
          <TouchableOpacity onPress={() => addFriend(userFound.uid)}>
            <MaterialIcon
              name="person-add"
              size={32}
              color={Colors.GREEN_COLOR}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={1}
          underlineText=""
          onPress={() => {
            handler(1);
          }}
        />
        <DailerItem
          digit={2}
          underlineText="ABC"
          onPress={() => {
            handler(2);
          }}
        />
        <DailerItem
          digit={3}
          underlineText="DEF"
          onPress={() => {
            handler(3);
          }}
        />
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={4}
          underlineText="GHI"
          onPress={() => {
            handler(4);
          }}
        />
        <DailerItem
          digit={5}
          underlineText="JKL"
          onPress={() => {
            handler(5);
          }}
        />
        <DailerItem
          digit={6}
          underlineText="MNO"
          onPress={() => {
            handler(6);
          }}
        />
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={7}
          underlineText="PQRS"
          onPress={() => {
            handler(7);
          }}
        />
        <DailerItem
          digit={8}
          underlineText="TUV"
          onPress={() => {
            handler(8);
          }}
        />
        <DailerItem
          digit={9}
          underlineText="WXYZ"
          onPress={() => {
            handler(9);
          }}
        />
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={'*'}
          underlineText=""
          onPress={() => {
            handler('*');
          }}
        />
        <DailerItem
          digit={0}
          underlineText="+"
          onPress={() => {
            handler(0);
          }}
        />
        <DailerItem
          digit={'#'}
          underlineText=""
          onPress={() => {
            handler('#');
          }}
        />
      </View>
      <View style={styles.stack}>
        <View style={[styles.dailerItem, {opacity: 0}]} />
        <TouchableOpacity
          onPress={() =>
            navigate(NavScreenTags.CALL_SCREEN, {
              isOutGoing: true,
              contactName: 'unknown',
              contactNumber: typedText,
            })
          }
          style={[styles.dailerItem, {backgroundColor: Colors.GREEN_COLOR}]}>
          <MaterialIcon name="call" size={32} color={Colors.WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: scaleSize(75),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onLongPress={() => setTypedText('')}
          onPress={handlerBackSpace}>
          <Icon name="backspace" color={Colors.GRAY_COLOR} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface DailerProps {
  digit: any;
  underlineText: string;
  onPress: any;
}

function DailerItem(props: DailerProps) {
  return (
    <TouchableOpacity style={styles.dailerItem} onPress={props.onPress}>
      <Text style={styles.mainText}>{props.digit}</Text>
      {props.underlineText !== '' && (
        <Text style={styles.secText}>{props.underlineText}</Text>
      )}
    </TouchableOpacity>
  );
}
