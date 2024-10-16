/* eslint-disable react-native/no-inline-styles */
import {View, useWindowDimensions} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Colors from '../../../common/styles/Colors';
import MessagesTask from './MessagesTask';
import CallTask from './CallTask';
import VideoCallTask from './VideoCallTask';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

const renderScene = SceneMap({
  0: MessagesTask,
  1: CallTask,
  2: VideoCallTask,
});

export default function AddTask() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 0, title: 'Messages'},
    {key: 1, title: 'Call'},
    {key: 2, title: 'Video Call'},
  ]);
  const renderTabBar = (props: any) => (
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

      <PageSkeleton hasHeader={true} headerTitle="Schedule task">
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
