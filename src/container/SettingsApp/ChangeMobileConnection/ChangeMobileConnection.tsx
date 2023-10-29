import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';

export default function ChangeMobileConnection() {
  return (
    <PageSkeleton hasHeader={true} headerTitle="Change Mobile Connection">
      <View>
        <Text>Change Mobile Connection</Text>
      </View>
    </PageSkeleton>
  );
}
