/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import CustomStatusbar from '../../common/components/customStatusbar/CustomStatusbar';
import {Text, TouchableOpacity, View, Animated} from 'react-native';
import {goBack, replace} from '../../common/utils/NavigatorUtils';
import Colors from '../../common/styles/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {CLEAR_MESSAGE_SCHEDULE} from '../../common/constants/ActionTypes';
import Home from '../Home/Home';

export default function BlankScreen() {
  //** states */
  const [isTrue, setIsTrue] = useState(false);

  //** animation */
  const scaleValue = new Animated.Value(0);

  //** redux */
  const schedule = useSelector((state: any) => state.schedule);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTrue) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTrue]);

  React.useEffect(() => {
    if (schedule.messages) {
      const targetDate = new Date(schedule.messages.countdown);
      const checkDateTime = () => {
        const currentDate = new Date();

        if (currentDate >= targetDate) {
          setIsTrue(true);

          clearInterval(interval);
        }
      };
      const interval = setInterval(checkDateTime, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [schedule.messages]);

  function handleGoToMessages() {
    replace(NavScreenTags.MESSAGES_CHAT, {
      messagesTask: schedule.messages,
    });
    dispatch({type: CLEAR_MESSAGE_SCHEDULE, payload: {}});
  }
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <Home isIcons />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => goBack()}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1000,
        }}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 200,
          }}
          onPress={() => handleGoToMessages()}>
          {schedule.messages && (
            <Animated.View
              style={[
                {
                  backgroundColor: Colors.PRIMARY,
                  borderColor: 'white',
                  borderWidth: 1.5,
                  height: 100,
                  width: '80%',
                  borderRadius: 20,
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: 20,
                },
                {transform: [{scale: scaleValue}]},
              ]}>
              <View>
                <Text style={{fontWeight: '700', fontSize: 20}}>
                  New Message
                </Text>
                <Text style={{fontSize: 18}}>
                  From: {schedule.messages.callerId}
                </Text>
              </View>
            </Animated.View>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}
