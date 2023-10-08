import React from 'react';
import {Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {styles} from './styles';
import Colors from '../../styles/Colors';
import {regexUtils} from '../../utils/RegexUtils';

interface Props {
  value: string;
  onChange: any;
}
const CustomPhoneInput = (props: Props) => {
  return (
    <View style={styles.mainVw}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.txtContainer}>
          <Text style={styles.codeTxt}>+1</Text>
          <MaskInput
            style={styles.txtInput}
            //@ts-ignore
            placeholder={t(LocalizeKeys.MOBILE_NUMBER)}
            placeholderTextColor={Colors.GRAY_COLOR}
            autoFocus
            inputMode={'numeric'}
            defaultValue={props.value}
            keyboardType={'number-pad'}
            value={props.value}
            onChangeText={(masked: string, unmasked: string) => {
              props.onChange(unmasked);
            }}
            mask={regexUtils.maskedPhoneNumberRegex}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomPhoneInput;
