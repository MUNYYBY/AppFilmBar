import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './style';

interface Props {
  onPress: any;
  title: any;
  buttonStyle?: any;
  buttonText?: any;
  shouldEnable?: boolean;
  loading?: boolean;
}

const CustomButton = (props: Props) => {
  const {onPress, title, buttonStyle, buttonText, shouldEnable, loading} =
    props;
  return (
    <TouchableOpacity
      disabled={shouldEnable === false ? true : loading ? true : false}
      onPress={onPress}
      style={[
        styles.btnView,
        shouldEnable === false ? styles.disabledBtnView : {},
        buttonStyle ?? {},
      ]}>
      {loading ? (
        <ActivityIndicator color="black" />
      ) : (
        <Text
          style={[
            styles.btnTxt,
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
