/* eslint-disable react-native/no-inline-styles */
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../common/styles/Colors';
import styles from './styles';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';

export default function ScheduleHome() {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor="white"
        translucent={false}
      />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View style={styles.headerContent}>
          <Text style={{fontSize: scaleSize(24), fontWeight: '500'}}>
            Schedule Tasks
          </Text>
          <TouchableOpacity onPress={() => navigate(NavScreenTags.ADD_TASK)}>
            <Icon name="plus" size={36} color={Colors.BLACK_COLOR} />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View style={styles.taskPlaceHolder}>
            <View>
              <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                Messages
              </Text>
              <Text>Muneeb ur rehman</Text>
              <Text>Schedule for 11:45</Text>
            </View>
            <Text>1 minute ago</Text>
          </View>
          <View style={styles.taskPlaceHolder}>
            <View>
              <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                Call
              </Text>
              <Text>Amir Jibran</Text>
              <Text>Schedule for 11:45</Text>
            </View>
            <Text>5 minute ago</Text>
          </View>
          <View style={styles.taskPlaceHolder}>
            <View>
              <Text style={{fontSize: scaleSize(22), fontWeight: '500'}}>
                Video Call
              </Text>
              <Text>Jeff A.</Text>
              <Text>Schedule for 11:45</Text>
            </View>
            <Text>10 minute ago</Text>
          </View>
        </View>
      </PageSkeleton>
    </>
  );
}
