import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';

export default function ChangeDateTime() {
  return (
    <PageSkeleton hasHeader={true} headerTitle="Change Date/Time">
      <View>
        <Text>Change Date/Time</Text>
      </View>
    </PageSkeleton>
  );
}
