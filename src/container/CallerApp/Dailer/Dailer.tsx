/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../common/styles/Colors';
import {scaleFontSize, scaleSize} from '../../../common/utils/ScaleSheetUtils';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';

export default function Dailer() {
  const [typedText, setTypedText] = useState('');
  const handler = (value: any) => {
    setTypedText(typedText + value);
  };
  const handlerBackSpace = () => {
    setTypedText(typedText.slice(0, -1));
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          {
            marginVertical: scaleSize(20),
            fontSize: scaleFontSize(28),
            color: Colors.BLACK_COLOR,
            fontWeight: '400',
            textAlign: 'center',
          },
        ]}>
        {typedText}
      </Text>
      <View style={styles.stack}>
        <DailerItem
          digit={1}
          underlineText=""
          onPress={() => {
            handler(1);
          }}
        />
        <DailerItem
          digit={2}
          underlineText="ABC"
          onPress={() => {
            handler(2);
          }}
        />
        <DailerItem
          digit={3}
          underlineText="DEF"
          onPress={() => {
            handler(3);
          }}
        />
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={4}
          underlineText="GHI"
          onPress={() => {
            handler(4);
          }}
        />
        <DailerItem
          digit={5}
          underlineText="JKL"
          onPress={() => {
            handler(5);
          }}
        />
        <DailerItem
          digit={6}
          underlineText="MNO"
          onPress={() => {
            handler(6);
          }}
        />
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={7}
          underlineText="PQRS"
          onPress={() => {
            handler(7);
          }}
        />
        <DailerItem
          digit={8}
          underlineText="TUV"
          onPress={() => {
            handler(8);
          }}
        />
        <DailerItem
          digit={9}
          underlineText="WXYZ"
          onPress={() => {
            handler(9);
          }}
        />
      </View>
      <View style={styles.stack}>
        <DailerItem
          digit={'*'}
          underlineText=""
          onPress={() => {
            handler('*');
          }}
        />
        <DailerItem
          digit={0}
          underlineText="+"
          onPress={() => {
            handler(0);
          }}
        />
        <DailerItem
          digit={'#'}
          underlineText=""
          onPress={() => {
            handler('#');
          }}
        />
      </View>
      <View style={styles.stack}>
        <View style={[styles.dailerItem, {opacity: 0}]} />
        <TouchableOpacity
          onPress={
            () => typedText !== '' && navigate(NavScreenTags.REAL_CALL)
            // navigate(NavScreenTags.CALL_SCREEN, {
            //   isOutGoing: true,
            //   contactName: 'unknown',
            //   contactNumber: typedText,
            // })
          }
          style={[styles.dailerItem, {backgroundColor: Colors.GREEN_COLOR}]}>
          <MaterialIcon name="call" size={32} color={Colors.WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: scaleSize(75),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onLongPress={() => setTypedText('')}
          onPress={handlerBackSpace}>
          <Icon name="backspace" color={Colors.GRAY_COLOR} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface DailerProps {
  digit: any;
  underlineText: string;
  onPress: any;
}

function DailerItem(props: DailerProps) {
  return (
    <TouchableOpacity style={styles.dailerItem} onPress={props.onPress}>
      <Text style={styles.mainText}>{props.digit}</Text>
      {props.underlineText !== '' && (
        <Text style={styles.secText}>{props.underlineText}</Text>
      )}
    </TouchableOpacity>
  );
}
