import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {navigate} from '../../utils/NavigatorUtils';
import {NavScreenTags} from '../../constants/NavScreenTags';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import {scaleSize} from '../../utils/ScaleSheetUtils';
import moment from 'moment';

export default function CustomContact({contact, user, key, isCall}: any) {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigate(NavScreenTags.MESSAGES_CHAT, {contact, user})}
        style={styles.contactcontainer}
        activeOpacity={0.65}
        key={key}>
        <View style={styles.innerContainer}>
          <View style={{marginRight: scaleSize(5)}}>
            <IconMaterial
              name="account-circle"
              color={Colors.BLACK_COLOR}
              size={60}
            />
          </View>
          <View>
            <Text style={styles.mainText}>{contact.name}</Text>
            {!isCall && <Text style={styles.secText}>Available</Text>}
          </View>
        </View>
        <View>
          {!isCall ? (
            <Text style={styles.secText}>
              {moment(contact.createdOn).fromNow()}
            </Text>
          ) : (
            <Icon name="add-call" size={26} color="black" />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.devider} />
    </>
  );
}
