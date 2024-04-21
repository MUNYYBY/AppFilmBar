/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import styles from './styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {goBack} from '../../../common/utils/NavigatorUtils';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import Colors from '../../../common/styles/Colors';
import {Image} from 'react-native';
import {Keyboard} from 'react-native';
import {KEYBOARD_OFFSET} from '../../../common/constants/KeyboardOffset';
import RealChat from './RealChat';

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

export default function ChatScreen({route}: any) {
  //** fetch params */
  const {messagesTask, contact, user} = route.params;

  return (
    <>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.05)"
      />
      {messagesTask ? (
        <FakeChatScreen messagesTask={messagesTask} />
      ) : (
        <RealChat contact={contact} user={user} />
      )}
    </>
  );
}

function FakeChatScreen({messagesTask}: any) {
  const [value, onChangeText] = React.useState('');
  const [initialMessagesStack, _] = useState(
    messagesTask ? messagesTask.messages : [],
  );
  const [messages, setMessages] = useState<any>(
    messagesTask ? messagesTask.recentMessages : [],
  );
  const [trigger, setTrigger] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  //** ref */
  const scrollViewRef = useRef<any>();
  const handleSendMessage = () => {
    if (value.replace(/\s/g, '').length) {
      setMessages((prev: any) => [
        ...prev,
        {message: value, createdAt: new Date(), type: 'Send'},
      ]);
      onChangeText('');
      setTrigger(true);
    }
  };

  const displayMessages = async (secs?: number, instantRun?: boolean) => {
    if (initialMessagesStack.length > 0) {
      if (instantRun) {
        setMessages((prevMessages: any) => [
          ...prevMessages,
          initialMessagesStack[msgIndex],
        ]);
      } else {
        await new Promise(resolve => setTimeout(resolve, secs ?? 2500));
        setMessages((prevMessages: any) => [
          ...prevMessages,
          initialMessagesStack[msgIndex],
        ]);
      }
      setMsgIndex(msgIndex + 1);
    }
  };
  useEffect(() => {
    if (trigger && msgIndex < initialMessagesStack.length) {
      displayMessages(2000);
      setTrigger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
  useEffect(() => {
    displayMessages(2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageSkeleton headerTitle="" hasHeader={false}>
        <View style={{height: '100%'}}>
          <View style={[styles.headerContainer, styles.container]}>
            <View style={styles.innerContainer}>
              <TouchableOpacity onPress={() => goBack()}>
                <Icon
                  name="chevron-back"
                  size={24}
                  color={Colors.BLACK_COLOR}
                />
              </TouchableOpacity>
              <View style={{marginRight: scaleSize(10)}}>
                {messagesTask ? (
                  messagesTask.avatar && (
                    <Image
                      source={{uri: messagesTask.avatar}}
                      style={{
                        width: scaleSize(50),
                        height: scaleSize(50),
                        backgroundColor: '#EEEEEE',
                        borderRadius: scaleSize(100),
                      }}
                    />
                  )
                ) : (
                  <IconMaterial
                    name="account-circle"
                    color={Colors.BLACK_COLOR}
                    size={50}
                  />
                )}
              </View>
              <View>
                <Text style={styles.mainText}>
                  {messagesTask ? messagesTask.callerId : 'Unknown'}
                </Text>
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
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({animated: true})
            }>
            {messages.length > 0 &&
              messages.map((message: any, index: number) => {
                return message.type === 'Recieve' ? (
                  <View key={index}>
                    <RecievedMessageContainer
                      msg={message.message}
                      date={message.createdAt}
                    />
                  </View>
                ) : (
                  <View key={index}>
                    <SendMessageContainer
                      msg={message.message}
                      date={message.createdAt}
                    />
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
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  backgroundColor: Colors.PRIMARY,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleSendMessage}>
                <Icon name="send" size={20} color={Colors.BLACK_COLOR} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </PageSkeleton>
    </>
  );
}
