/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {TabView, SceneMap, TabBar, TabBarProps} from 'react-native-tab-view';
import Colors from '../../../common/styles/Colors';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dailer from '../../CallerApp/Dailer/Dailer';

const renderScene = SceneMap({
  0: Dailer,
  1: Dailer,
});

export default function MessagesAppHome() {
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
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor="white"
        translucent={false}
      />
      <TouchableOpacity
        style={{
          marginTop: scaleSize(20),
          alignItems: 'flex-end',
          paddingHorizontal: scaleSize(16),
        }}>
        <Icon name="plus" size={40} color={Colors.BLACK_COLOR} />
      </TouchableOpacity>
      <PageSkeleton hasHeader={false} headerTitle="">
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
