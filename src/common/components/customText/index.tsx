import {Text} from 'react-native';
import React from 'react';
import styles from './style';

interface Props {
  text: any;
  txtStyle?: any;
}
const CustomText = (props: Props) => {
  return (
    <Text style={[styles.customText, props.txtStyle ? props.txtStyle : {}]}>
      {props.text}
    </Text>
  );
};

export default CustomText;
