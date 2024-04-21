/* eslint-disable react-native/no-inline-styles */
import {View, Text, Switch} from 'react-native';
import React from 'react';
import PageSkeleton from '../../../common/hoc/pageSkeleton';
import CustomStatusbar from '../../../common/components/customStatusbar/CustomStatusbar';
import {useDispatch, useSelector} from 'react-redux';
import {scaleSize} from '../../../common/utils/ScaleSheetUtils';
import CustomButton from '../../../common/components/customButton';
import {SET_WIFI_AND_SERVICE} from '../../../common/constants/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysTags} from '../../../common/constants/StorageKeysTags';

export default function ChangeMobileConnection() {
  //** redux */
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings);
  const [showWifi, setShowWifi] = React.useState<boolean>(settings.isWifi);
  const [showNoService, setNoService] = React.useState<boolean>(
    settings.isNoService,
  );

  return (
    <>
      <CustomStatusbar barStyle="dark-content" />
      <PageSkeleton hasHeader={true} headerTitle="Change Mobile Connection">
        <View style={{marginTop: scaleSize(20)}}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
              Show Wifi
            </Text>
            <Switch onChange={() => setShowWifi(!showWifi)} value={showWifi} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: scaleSize(15),
            }}>
            <Text style={{fontSize: scaleSize(18), fontWeight: '500'}}>
              Show "No service"
            </Text>
            <Switch
              onChange={() => setNoService(!showNoService)}
              value={showNoService}
            />
          </View>
        </View>
        <View style={{marginTop: scaleSize(20)}} />
        <CustomButton
          title="Update"
          onPress={() => {
            dispatch({
              type: SET_WIFI_AND_SERVICE,
              payload: {
                isWifi: showWifi,
                isNoService: showNoService,
              },
            });
            AsyncStorage.setItem(
              StorageKeysTags.Signals_and_Wifi,
              JSON.stringify({
                isWifi: showWifi,
                isNoService: showNoService,
              }),
            );
          }}
        />
      </PageSkeleton>
    </>
  );
}
