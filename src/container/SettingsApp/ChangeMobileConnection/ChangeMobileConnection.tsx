import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

export default function ChangeMobileConnection() {
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Mobile Connection">
        <View>
          <Text>Change Mobile Connection</Text>
        </View>
      </PageSkeleton>
    </>
  );
}
