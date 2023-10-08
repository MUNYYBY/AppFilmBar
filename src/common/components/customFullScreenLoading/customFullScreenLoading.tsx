import {View, ActivityIndicator, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';

interface Props {
  loadingText?: string;
}

export default function CustomFullScreenLoading(props: Props) {
  return (
    <View style={[styles.loadingConatiner, styles.contentContainer]}>
      <ActivityIndicator color={Colors.YELLOW_COLOR} size={'large'} />
      {props.loadingText && (
        <Text
          style={{
            color: Colors.YELLOW_COLOR,
            fontSize: scaleFontSize(18),
            marginTop: scaleSize(8),
          }}>
          {props.loadingText}
        </Text>
      )}
    </View>
  );
}
