/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomButton from '../../../common/components/customButton';
import {TabView, SceneMap, TabBar, TabBarProps} from 'react-native-tab-view';
import Colors from '../../../common/styles/Colors';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Dailer from '../Dailer/Dailer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contacts from '../Contacts/Contacts';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {goBack} from '../../../common/utils/NavigatorUtils';

const renderScene = SceneMap({
  0: Dailer,
  1: Contacts,
});

export default function CallerAppHome() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 0, title: 'Call'},
    {key: 1, title: 'Contacts'},
  ]);
  const renderTabBar = (props: TabBarProps) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Colors.GREEN_COLOR}}
      style={{backgroundColor: Colors.WHITE_COLOR, color: Colors.BLACK_COLOR}}
      activeColor={Colors.BLACK_COLOR}
      inactiveColor="rgba(0,0,0,0.5)"
    />
  );

  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={false} headerTitle="">
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: scaleSize(30),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{}} onPress={goBack}>
              <Icon name="chevron-left" size={45} color={'#000'} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scaleSize(24),
                fontWeight: '500',
              }}>
              Phone
            </Text>
          </View>
          {/* <TouchableOpacity
            style={{
              paddingHorizontal: scaleSize(16),
            }}>
            <Icon name="plus" size={40} color={Colors.BLACK_COLOR} />
          </TouchableOpacity> */}
        </View>
        <View style={{marginHorizontal: scaleSize(-16), flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </PageSkeleton>
    </>
  );
}
