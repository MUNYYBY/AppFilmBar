import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {goBack} from '../../utils/NavigatorUtils';

interface Props {
  headerTitle?: string;
  onPress?: any;
}

const backButtonHandler = () => {
  goBack();
};

const CustomHeader = (props: Props) => {
  return (
    <View style={styles.mainVw}>
      <TouchableOpacity
        onPress={props.onPress ? props.onPress : backButtonHandler}>
        {/* <Image source={Images.BACK} resizeMode={'contain'} style={styles.img} /> */}
      </TouchableOpacity>
      <View style={styles.headerVw}>
        <Text style={styles.headerTxt}>{props.headerTitle}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
