import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ICONS} from '../../constants/Icons';
import {scaleFontSize} from '../../utils/ScaleSheetUtils';

interface Props {
  errorText: any;
  isError: boolean;
}

const CustomErrorText = (props: Props) => {
  return (
    <View style={styles.error}>
      <Text style={styles.errorText}>
        {`${props.errorText} `}
        <Icon
          name={props.isError ? ICONS.ERROR_CIRCLE : ICONS.SUCCESS_CIRCLE}
          size={scaleFontSize(13)}
          color={
            props.isError ? Colors.ERROR_CHECK_ICON : Colors.SUCCESS_CHECK_ICON
          }
        />
      </Text>
    </View>
  );
};

export default CustomErrorText;
