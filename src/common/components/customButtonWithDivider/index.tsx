import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../customButton';
import styles from './style';

interface Props {
  onPress: any;
  buttonText: string;
}
const CustomButtonWithDivider = (props: Props) => {
  return (
    <View>
      <View style={styles.dividerView}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>
      <CustomButton
        onPress={props.onPress}
        buttonStyle={styles.button}
        buttonText={styles.buttonText}
        title={props.buttonText}
      />
    </View>
  );
};

export default CustomButtonWithDivider;
