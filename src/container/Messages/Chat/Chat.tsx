/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {goBack} from '../../../common/utils/NavigatorUtils';
import CustomButton from '../../../common/components/customButton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

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
  // const contact = route.params.contact;
  // const user = route.params.user;
  const [value, onChangeText] = React.useState('');
  const [messages, setMessages] = useState([]);

  //** ref */
  const scrollViewRef = useRef<any>();
  const handleSendMessage = () => {
    // if not empty or white spaces
    if (value.replace(/\s/g, '').length) {
      onChangeText('');
    }
  };
  return (
    <>
      <CustomStatusbar
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.05)"
      />

      <PageSkeleton headerTitle="" hasHeader={false}>
        <View style={{height: '100%'}}>
          <View style={[styles.headerContainer, styles.container]}>
            <View style={styles.innerContainer}>
              <TouchableOpacity onPress={() => goBack()}>
                <Icon
                  name="chevron-back"
                  size={24}
                  color={Colors.WHITE_COLOR}
                />
              </TouchableOpacity>
              <View style={{marginRight: scaleSize(10)}}>
                <IconMaterial
                  name="account-circle"
                  color={Colors.PRIMARY_COLOR_2}
                  size={50}
                />
              </View>
              <View>
                <Text style={styles.mainText}>Munyyb</Text>
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
          <View style={[styles.lowerContainer, styles.container]}>
            <TextInput
              style={styles.InputField}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={'Type here...'}
              placeholderTextColor={Colors.WHITE_COLOR_85}
              returnKeyType={'send'}
              multiline={true}
              editable={true}
              onSubmitEditing={Keyboard.dismiss}
              autoFocus={true}
            />
            <CustomButton
              title={<Icon name="send" size={20} color={Colors.WHITE_COLOR} />}
              onPress={handleSendMessage}
              buttonStyle={{width: 50, height: 50}}
            />
          </View>
        </View>
      </PageSkeleton>
    </>
  );
}
