import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';

export default function AddTask() {
  return (
    <PageSkeleton hasHeader={true} headerTitle="Schedule task">
      <View>
        <Text>AddTask</Text>
      </View>
    </PageSkeleton>
  );
}
