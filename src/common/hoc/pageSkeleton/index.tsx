import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeader from '../../components/customHeader';

interface Props {
  headerTitle: string;
  leftIconPress?: any;
  headerRightContent?: React.ReactNode;
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
          rightContent={props.headerRightContent}
        />
      ) : null}
      <View style={styles.childrenView}>{props.children}</View>
    </SafeAreaView>
  );
};

export default PageSkeleton;
