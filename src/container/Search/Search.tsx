import {View, Text} from 'react-native';
import React from 'react';
import PageSkeleton from '../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../common/components/customStatusbar/CustomStatusbar';

export default function Search() {
  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton headerTitle="Search User" hasHeader>
        <View>
          <Text>Search</Text>
        </View>
      </PageSkeleton>
    </>
  );
}
