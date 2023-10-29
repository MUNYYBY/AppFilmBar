/* eslint-disable react-native/no-inline-styles */
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import CustomContact from '../../../common/components/CustomContact/CustomContact';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

export default function InboxScreen() {
  const [contacts, setContacts] = useState<any>([
    {name: 'Muneeb', createdOn: '2021-09-12T12:00:00.000Z'},
    {name: 'Muneeb', createdOn: '2021-09-12T12:00:00.000Z'},
  ]);
  const [filterContacts, setFilterContacts] = useState<null | []>(contacts);
  const [value, setValue] = useState('');
  const [user, setUser] = useState<any>(false);
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View style={styles.headerContent}>
          <Text style={{fontSize: scaleSize(32), fontWeight: '500'}}>
            Messages
          </Text>
          <TouchableOpacity>
            <Icon name="plus" size={36} color={Colors.BLACK_COLOR} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollContainer}>
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
