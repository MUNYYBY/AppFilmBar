import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CustomHeader from '@pigeonship/common/component/customHeader';
import styles from './styles';

interface Props {
  headerTitle: string;
  leftIconPress?: any;
  hasHeader: boolean;
  children: any;
}
const PageSkeleton = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {props.hasHeader ? (
        <CustomHeader
          headerTitle={props.headerTitle}
          onPress={props.leftIconPress}
        />
      ) : null}
      <View style={styles.childrenView}>{props.children}</View>
    </SafeAreaView>
  );
};

export default PageSkeleton;
