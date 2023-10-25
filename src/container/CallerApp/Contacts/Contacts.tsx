import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomContact from '../../../common/components/CustomContact/CustomContact';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';

export default function Contacts() {
  return (
    <PageSkeleton hasHeader={false} headerTitle="">
      <ScrollView style={{paddingTop: scaleSize(20)}}>
        <CustomContact
          contact={{name: 'Muneeb', createdOn: '2021-09-12T12:00:00.000Z'}}
          isCall={true}
        />
      </ScrollView>
    </PageSkeleton>
  );
}
