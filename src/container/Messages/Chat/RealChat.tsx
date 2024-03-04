/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {SendMessage} from '../../../common/services/Messages';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {goBack} from '../../../common/utils/NavigatorUtils';
import Colors from '../../../common/styles/Colors';
import CustomButton from '../../../common/components/customButton';
import {KEYBOARD_OFFSET} from '../../../common/constants/KeyboardOffset';

const RecievedMessageContainer = ({msg, date}: any) => (
  <>
    <View style={{marginBottom: scaleSize(15)}}>
      <View style={styles.recievedMessageContainer}>
        <Text style={styles.recievedMessageText}>{msg}</Text>
      </View>
      <View>
        <Text style={styles.dateText}>{moment(date).fromNow()}</Text>
      </View>
    </View>
  </>
);
const SendMessageContainer = ({msg, date}: any) => (
  <>
    <View
      style={{
        marginBottom: scaleSize(15),
        display: 'flex',
        alignItems: 'flex-end',
      }}>
      <View style={styles.sendMessageContainer}>
        <Text style={styles.sendMessageText}>{msg}</Text>
      </View>
      <View>
        <Text style={styles.dateText}>{moment(date).fromNow()}</Text>
      </View>
    </View>
  </>
);

export default function RealChat({contact, user}: any) {
  const [value, onChangeText] = React.useState('');
  const [messages, setMessages] = useState([]);

  //** ref */
  const scrollViewRef = useRef<any>();
  const handleSendMessage = () => {
    // if not empty or white spaces
    if (value.replace(/\s/g, '').length) {
      SendMessage(user, contact, value);
      onChangeText('');
      Keyboard.dismiss;
    }
  };
  //** get realtime messages */
  useEffect(() => {
    const subscriber = firestore()
      .collection(`Users/${user.uid}/chatUsers/${contact.uid}/messages`)
      .orderBy('timestamp', 'asc')
      .onSnapshot((documentSnapshot: any) => {
        setMessages(
          documentSnapshot.docs.map((doc: any) => ({
            id: doc.id,
            msg: doc.data().message,
            type: doc.data().messageUserId === user.uid ? 'sender' : 'reciever',
            date: doc.data().created_at
              ? doc.data().created_at.toString()
              : doc.data().timestamp.toString(),
          })),
        );
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PageSkeleton headerTitle="" hasHeader={false}>
      <View style={{height: '100%'}}>
        <View style={[styles.headerContainer, styles.container]}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name="chevron-back" size={24} color={Colors.BLACK_COLOR} />
            </TouchableOpacity>
            <View style={{marginRight: scaleSize(10)}}>
              <IconMaterial
                name="account-circle"
                color={Colors.BLACK_COLOR}
                size={50}
              />
            </View>
            <View>
              <Text style={styles.mainText}>{contact.name}</Text>
              <Text style={styles.secText}>Available</Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={styles.scrollViewStyle}
          ref={scrollViewRef}
          contentContainerStyle={{
            justifyContent: 'flex-end',
            flexGrow: 1,
          }}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {messages.map((message: any, index: number) => {
            return message.type === 'reciever' ? (
              <View key={index}>
                <RecievedMessageContainer
                  msg={message.msg}
                  date={message.date}
                />
              </View>
            ) : (
              <View key={index}>
                <SendMessageContainer msg={message.msg} date={message.date} />
              </View>
            );
          })}
        </ScrollView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={KEYBOARD_OFFSET - 60}>
          <View style={[styles.lowerContainer, styles.container]}>
            <TextInput
              style={styles.InputField}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={'Type here...'}
              placeholderTextColor={Colors.BLACK_COLOR}
              returnKeyType={'send'}
              multiline={true}
              editable={true}
              onSubmitEditing={Keyboard.dismiss}
            />
            <CustomButton
              title={<Icon name="send" size={20} color={Colors.BLACK_COLOR} />}
              onPress={handleSendMessage}
              buttonStyle={{width: 60, height: 60}}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </PageSkeleton>
  );
}
