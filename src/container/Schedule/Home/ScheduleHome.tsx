/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../common/styles/Colors';
import styles from './styles';
import {goBack, navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {useSelector} from 'react-redux';
import moment from 'moment';

export default function ScheduleHome() {
  const schedule = useSelector((state: any) => state.schedule);
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
        <View style={{}}>
          {!schedule.call && !schedule.video && !schedule.messages && (
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontWeight: '400',
                marginTop: scaleSize(75),
                fontSize: scaleFontSize(20),
              }}>
              No tasks scheduled yet!
            </Text>
          )}
          {schedule.call && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Call
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
          {schedule.video && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Video Call
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
          {schedule.messages && (
            <View style={styles.taskPlaceHolder}>
              <View>
                <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                  Messages
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
