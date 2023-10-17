import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {goBack} from '../../utils/NavigatorUtils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  headerTitle?: string;
  onPress?: any;
  rightContent?: any;
}

const backButtonHandler = () => {
  goBack();
};

const CustomHeader = (props: Props) => {
  return (
    <View style={styles.mainVw}>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={props.onPress ? props.onPress : backButtonHandler}>
          <Icon name="chevron-left" size={40} color={'#000'} />
        </TouchableOpacity>
        <View style={styles.headerVw}>
          <Text style={styles.headerTxt}>{props.headerTitle}</Text>
        </View>
      </View>
      <View>{props.rightContent}</View>
    </View>
  );
};

export default CustomHeader;
