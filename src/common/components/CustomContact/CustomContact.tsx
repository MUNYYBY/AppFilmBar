import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {navigate} from '../../utils/NavigatorUtils';
import {NavScreenTags} from '../../constants/NavScreenTags';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scaleSize} from '../../utils/ScaleSheetUtils';
import moment from 'moment';
import {Images} from '../../constants/Images';
import Colors from '../../styles/Colors';

interface Props {
  contact: any;
  user?: any;
  key?: any;
  isCall?: any;
  isMale?: boolean;
}

export default function CustomContact(props: Props) {
  const {contact, user, key, isCall, isMale} = props;
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          !isCall && navigate(NavScreenTags.MESSAGES_CHAT, {contact, user})
        }
        style={styles.contactcontainer}
        activeOpacity={!isCall ? 0.65 : 1}
        key={key}>
        <View style={styles.innerContainer}>
          <View style={{marginRight: scaleSize(10)}}>
            <Image source={isMale ? Images.CONTACT_2 : Images.CONTACT_1} />
          </View>
          <View>
            <Text style={styles.mainText}>{contact.name}</Text>
            {!isCall && <Text style={styles.secText}>Available</Text>}
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            isCall &&
            navigate(NavScreenTags.CALL_SCREEN, {
              isOutGoing: true,
              contactName: contact.name,
              contactNumber: '+923401839004',
            })
          }>
          {!isCall ? (
            <Text style={styles.secText}>
              {moment(contact.createdOn).fromNow()}
            </Text>
          ) : (
            <Icon name="add-call" size={26} color={Colors.BLACK_COLOR} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.devider} />
    </>
  );
}
