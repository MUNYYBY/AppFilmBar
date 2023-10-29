import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';

export default function ChangeBatteryPercentage() {
  return (
    <PageSkeleton hasHeader={true} headerTitle="Change Battery Percentage">
      <View>
        <Text>Change Battery Percentage</Text>
      </View>
    </PageSkeleton>
  );
}
