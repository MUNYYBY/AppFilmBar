import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
interface Props {
  status?: any;
  statusLine1?: any;
  statusLine2?: any;
}
const CustomStatusText = (props: Props) => {
  return (
    <View>
      <Text style={styles.welcomeBack}>{props.status}</Text>
      <View style={{paddingRight: 50}}>
        <Text style={styles.rewardingText}>{props.statusLine1}</Text>
        <Text style={styles.rewardingText}>{props.statusLine2}</Text>
      </View>
    </View>
  );
};

export default CustomStatusText;
