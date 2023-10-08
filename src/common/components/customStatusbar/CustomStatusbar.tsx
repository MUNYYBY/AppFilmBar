import {View, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  backgroundColor: string;
  barStyle: string;
}

export default function CustomStatusbar(props: Props) {
  const {backgroundColor, barStyle} = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
