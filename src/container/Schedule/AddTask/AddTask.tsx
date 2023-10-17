import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomButton from '../../../common/components/customButton';

export default function AddTask() {
  return (
    <PageSkeleton
      hasHeader={true}
      headerTitle="Schedule task"
      headerRightContent={
        <CustomButton
          onPress={() => {}}
          title={'Schedule'}
          varient="secondary"
        />
      }>
      <View>
        <Text>AddTask</Text>
      </View>
    </PageSkeleton>
  );
}
