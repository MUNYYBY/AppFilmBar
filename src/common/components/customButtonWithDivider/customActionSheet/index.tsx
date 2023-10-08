import React from 'react';
import styles from './style';
import {Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Colors from '../../../styles/Colors';

interface Props {
  data?: any;
  sheetTitle: any;
  filterId?: any;
  handlePress?: any;
  actionSheetRef?: any;
}
const CustomActionSheet = (props: Props) => {
  return (
    // <></>
    <ActionSheet
      drawUnderStatusBar={true}
      overlayColor={Colors.ACTION_OVERLAY}
      defaultOverlayOpacity={1}
      ref={props.actionSheetRef}
      containerStyle={styles.actionContainer}
      closeOnTouchBackdrop
      indicatorStyle={styles.indicatorSheetStyle}
      gestureEnabled={false}>
      <View style={styles.modalHeader}>
        <Text style={styles.chooseFilterHeading}>{props.sheetTitle}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            //@ts-ignore
            props.actionSheetRef.current?.hide();
          }}
          style={styles.cancelImageView}>
          {/* <Image source={Images.CANCEL} style={styles.cancelImage} /> */}
        </TouchableOpacity>
      </View>
      {props.data.map((item: any, index: number) => {
        return (
          <TouchableOpacity
            style={styles.cardVw}
            key={index}
            onPress={() => props.handlePress(index)}>
            <View style={styles.cardHeaderVw}>
              <View style={styles.filterView}>
                <View
                  style={
                    props.filterId === index ? styles.selectedItemView : {}
                  }
                />
              </View>

              <Text style={styles.tabBarLabel}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ActionSheet>
  );
};

export default CustomActionSheet;
