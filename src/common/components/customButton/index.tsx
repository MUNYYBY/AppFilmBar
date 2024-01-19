import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './style';
import Colors from '../../styles/Colors';

interface Props {
  onPress: any;
  title: any;
  buttonStyle?: any;
  buttonText?: any;
  shouldEnable?: boolean;
  loading?: boolean;
  varient?: 'primary' | 'secondary';
}

const CustomButton = (props: Props) => {
  const {onPress, title, buttonStyle, buttonText, shouldEnable, loading} =
    props;
  return (
    <TouchableOpacity
      disabled={shouldEnable === false ? true : loading ? true : false}
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        props.varient === 'secondary' ? styles.btnViewSec : styles.btnView,
        shouldEnable === false ? styles.disabledBtnView : {},
        buttonStyle ?? {},
      ]}>
      {loading ? (
        <ActivityIndicator color={Colors.BLACK_COLOR} />
      ) : (
        <Text
          style={[
            props.varient === 'secondary' ? styles.btnTxtSec : styles.btnTxt,
            shouldEnable === false ? styles.disabledBtnTxt : {},
            buttonText ?? {},
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
