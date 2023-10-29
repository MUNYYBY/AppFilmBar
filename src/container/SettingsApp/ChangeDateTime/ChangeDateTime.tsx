import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';

export default function ChangeDateTime() {
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Date/Time">
        <View>
          <Text>Change Date/Time</Text>
        </View>
      </PageSkeleton>
    </>
  );
}
