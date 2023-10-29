import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

export default function ChangeBatteryPercentage() {
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Battery Percentage">
        <View>
          <Text>Change Battery Percentage</Text>
        </View>
      </PageSkeleton>
    </>
  );
}
