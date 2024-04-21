/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../common/styles/Colors';
import styles from './styles';
import {goBack, navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../../common/constants/StorageKeysTags';
import moment from 'moment';
import {
  SET_CALL_TASK_SCHEDULE,
  SET_MESSAGE_TASK_SCHEDULE,
  SET_VIDEO_TASK_SCHEDULE,
} from '../../../common/constants/ActionTypes';
import {useIsFocused} from '@react-navigation/native';

export default function ScheduleHome() {
  //** states */
  const [messages, setMessages] = useState<null | any>(null);
  const [calls, setCalls] = useState<null | any>(null);
  const [videoCalls, setVideosCalls] = useState<null | any>(null);

  //** native */
  const isFocused = useIsFocused();

  //** redux */
  const schedule = useSelector((state: any) => state.schedule);
  const dispatch = useDispatch();

  async function fetchAll() {
    const message = await AsyncStorage.getItem(StorageKeysTags.Messages);
    if (message !== null) {
      setMessages(JSON.parse(message));
    }
    const call = await AsyncStorage.getItem(StorageKeysTags.Calls);
    if (call !== null) {
      setCalls(JSON.parse(call));
    }
    const videoCall = await AsyncStorage.getItem(StorageKeysTags.VideoCalls);
    if (videoCall !== null) {
      setVideosCalls(JSON.parse(videoCall));
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);
  useEffect(() => {
    fetchAll();
  }, [isFocused]);

  function handleRunMessages() {
    dispatch({
      type: SET_MESSAGE_TASK_SCHEDULE,
      payload: {
        id: messages.id,
        avatar: messages.avatar,
        callerId: messages.callerId,
        countdown: String(
          moment().add(messages.minutes, 'm').add(messages.seconds, 's'),
        ),
        messages: messages.messages,
        recentMessages: messages.recentMessages,
        createdAt: String(new Date()),
      },
    });
    // AsyncStorage.removeItem(StorageKeysTags.Messages);
    setMessages(null);
  }
  function handleRunCall() {
    dispatch({
      type: SET_CALL_TASK_SCHEDULE,
      payload: {
        id: calls.id,
        avatar: calls.avatar,
        callerId: calls.callerId,
        number: calls.number,
        countdown: String(
          moment().add(calls.minutes, 'm').add(calls.seconds, 's'),
        ),
        createdAt: String(new Date()),
      },
    });
    // AsyncStorage.removeItem(StorageKeysTags.Calls);
    setCalls(null);
  }
  function handleRunVideoCall() {
    dispatch({
      type: SET_VIDEO_TASK_SCHEDULE,
      payload: {
        id: videoCalls.id,
        avatar: videoCalls.avatar,
        callerId: videoCalls.CallerId,
        number: videoCalls.Number,
        countdown: String(
          moment().add(videoCalls.minutes).add(videoCalls.seconds),
        ),
        incomingVideo: videoCalls.incomingVideo,
        createdAt: String(new Date()),
      },
    });
    // AsyncStorage.removeItem(StorageKeysTags.VideoCalls);
    setVideosCalls(null);
  }
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
            <Text style={{fontSize: scaleSize(24), fontWeight: '500'}}>
              Schedule Tasks
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigate(NavScreenTags.ADD_TASK)}>
            <Icon name="plus" size={36} color={Colors.BLACK_COLOR} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigate(NavScreenTags.BLANK_SCREEN)}
          activeOpacity={0.75}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            height: 65,
            width: 65,
            borderRadius: 100,
            position: 'absolute',
            bottom: 30,
            right: 10,
            zIndex: 1000,
          }}>
          <Icon name="fit-to-screen" size={32} color={'white'} />
        </TouchableOpacity>
        <View style={{}}>
          {!calls && !videoCalls && !messages && (
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontWeight: '400',
                marginTop: scaleSize(20),
                fontSize: scaleFontSize(20),
              }}>
              No tasks scheduled yet!
            </Text>
          )}
          {calls && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Call
                </Text>
                <Text>{calls?.callerId}</Text>
                <Text>
                  {(calls.seconds || calls.minutes) &&
                    'Schedule for ' +
                      calls.minutes +
                      'min & ' +
                      calls.seconds +
                      'sec'}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text>
                  {calls.createdAt && moment(calls.createdAt).fromNow()}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => handleRunCall()}
                    style={{
                      backgroundColor: Colors.GREEN_COLOR,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 80,
                      height: 40,
                      borderRadius: 100,
                      marginTop: 10,
                      marginRight: 2,
                    }}>
                    <Text style={{color: 'black'}}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      AsyncStorage.removeItem(StorageKeysTags.Calls);
                      setCalls(null);
                    }}
                    style={{
                      backgroundColor: Colors.ERROR_CHECK_ICON,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 15,
                      marginTop: 10,
                      marginRight: 2,
                    }}>
                    <Icon name="delete-outline" color="white" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {schedule.call && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Call - Running
                </Text>
                <Text>{schedule.call?.callerId}</Text>
                <Text>
                  {schedule.call.countdown &&
                    'Schedule for ' +
                      moment(schedule.call.countdown).format('hh:mm a')}
                </Text>
              </View>
              <Text>
                {schedule.call.createdAt &&
                  moment(schedule.call.createdAt).fromNow()}
              </Text>
            </View>
          )}
          {videoCalls && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Video Call
                </Text>
                <Text>{videoCalls?.callerId}</Text>
                <Text>
                  {(videoCalls.seconds || videoCalls.minutes) &&
                    'Schedule for ' +
                      videoCalls.minutes +
                      'min &' +
                      videoCalls.seconds +
                      'sec'}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text>
                  {videoCalls.createdAt &&
                    moment(videoCalls.createdAt).fromNow()}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => handleRunVideoCall()}
                    style={{
                      backgroundColor: Colors.GREEN_COLOR,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 80,
                      height: 40,
                      borderRadius: 100,
                      marginTop: 10,
                      marginRight: 2,
                    }}>
                    <Text style={{color: 'black'}}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      AsyncStorage.removeItem(StorageKeysTags.VideoCalls);
                      setVideosCalls(null);
                    }}
                    style={{
                      backgroundColor: Colors.ERROR_CHECK_ICON,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 15,
                      marginTop: 10,
                      marginRight: 2,
                    }}>
                    <Icon name="delete-outline" color="white" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {schedule.video && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Video Call - Running
                </Text>
                <Text>{schedule.video?.callerId}</Text>
                <Text>
                  {schedule.video.countdown &&
                    'Schedule for ' +
                      moment(schedule.video.countdown).format('hh:mm a')}
                </Text>
              </View>
              <Text>
                {schedule.video.createdAt &&
                  moment(schedule.video.createdAt).fromNow()}
              </Text>
            </View>
          )}
          {messages && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Messages
                </Text>
                <Text>{messages?.callerId}</Text>
                <Text>
                  {(messages.seconds || messages.minutes) &&
                    'Schedule for ' +
                      messages.minutes +
                      'min & ' +
                      messages.seconds +
                      'sec'}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text>
                  {messages.createdAt && moment(messages.createdAt).fromNow()}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => handleRunMessages()}
                    style={{
                      backgroundColor: Colors.GREEN_COLOR,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 80,
                      height: 40,
                      borderRadius: 100,
                      marginTop: 10,
                      marginRight: 2,
                    }}>
                    <Text style={{color: 'black'}}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      AsyncStorage.removeItem(StorageKeysTags.Messages);
                      setMessages(null);
                    }}
                    style={{
                      backgroundColor: Colors.ERROR_CHECK_ICON,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 15,
                      marginTop: 10,
                      marginRight: 2,
                    }}>
                    <Icon name="delete-outline" color="white" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {schedule.messages && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Messages - Running
                </Text>
                <Text>{schedule.messages?.callerId}</Text>
                <Text>
                  {schedule.messages.countdown &&
                    'Schedule for ' +
                      moment(schedule.messages.countdown).format('hh:mm a')}
                </Text>
              </View>
              <Text>
                {schedule.messages.createdAt &&
                  moment(schedule.messages.createdAt).fromNow()}
              </Text>
            </View>
          )}
        </View>
      </PageSkeleton>
    </>
  );
}
