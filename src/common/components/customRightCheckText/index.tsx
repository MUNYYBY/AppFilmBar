import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

interface Props {
  rightCheck?: any;
  rightCheck_Text1?: any;
}

const CustomRightCheckText = (props: Props) => {
  return (
    <View style={styles.rightClick_Vw}>
      <Image style={styles.rightCheck} source={props.rightCheck} />
      <Text style={styles.info}>{props.rightCheck_Text1}</Text>
    </View>
  );
};

export default CustomRightCheckText;
