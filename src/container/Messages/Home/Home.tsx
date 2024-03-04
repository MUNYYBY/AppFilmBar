/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import CustomContact from '../../../common/components/CustomContact/CustomContact';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {goBack, navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import {onAuthStateChanged} from '../../../common/services/Auth';
import {GetUsers} from '../../../common/services/Cloud';
import {showToast} from '../../../common/utils/AlertUtils';

export default function InboxScreen() {
  const [user, setUser] = useState<any>(false);

  const [contacts, setContacts] = useState<null | []>(null);
  const [filterContacts, setFilterContacts] =
    useState<typeof contacts>(contacts);
  const [value, setValue] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  function InitialFetching() {
    GetUsers().then((res: any) => {
      if (res.data) {
        //** remove the current user from list */
        setContacts(null);
        setFilterContacts(null);
        const temp = res.data.filter((e: any) => {
          return e.uid !== user.uid;
        });
        console.log(temp);
        setContacts(temp);
        setFilterContacts(temp);
        setRefreshing(false);
      } else {
        console.log(res.error);
        showToast('Failed while getting records!');
        setContacts([]);
        setFilterContacts([]);
        setRefreshing(false);
      }
    });
  }

  useEffect(() => {
    if (user) {
      InitialFetching();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    InitialFetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = () => {
    setFilterContacts(
      contacts.filter((e: any) => {
        return e.name.toLowerCase().includes(value.toLowerCase());
      }),
    );
  };

  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View style={styles.headerContent}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: scaleSize(-16),
            }}>
            <TouchableOpacity style={{}} onPress={goBack}>
              <Icon name="chevron-left" size={45} color={'#000'} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scaleSize(32),
                fontWeight: '500',
              }}>
              Messages
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigate(NavScreenTags.SEARCH)}>
            <Icon2 name="search" size={45} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.HeaderSearchInput}
            onChangeText={setValue}
            value={value}
            placeholder={'Search People to chat'}
            placeholderTextColor={Colors.WHITE_COLOR_85}
          />
          <TouchableOpacity onPress={onSearch}>
            <Icon name="send" size={20} color={Colors.WHITE_COLOR} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.secContainer}>
            {!filterContacts ? (
              <View style={{marginTop: 40}}>
                <ActivityIndicator size={32} color={Colors.PRIMARY_COLOR_1} />
              </View>
            ) : filterContacts.length === 0 ? (
              <View
                style={{
                  marginTop: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: scaleSize(35),
                }}>
                <Text
                  style={{
                    fontSize: scaleSize(16),
                    fontWeight: '500',
                    textAlign: 'center',
                    color: Colors.WHITE_COLOR_85,
                  }}>
                  No contacts available, please start a chat with new user!
                </Text>
              </View>
            ) : (
              <View style={styles.messagesStack}>
                {filterContacts.map((contact: any, index: number) => {
                  return (
                    <CustomContact contact={contact} user={user} key={index} />
                  );
                })}
              </View>
            )}
          </View>
          <View style={{height: 65}} />
        </ScrollView>
      </PageSkeleton>
    </>
  );
}
