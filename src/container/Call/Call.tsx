/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {View} from 'react-native';
import {goBack} from '../../common/utils/NavigatorUtils';

const RealCall = ({route}: any) => {
  const {channelName, uid, userAccount, type} = route.params;
  console.log('Real: ', channelName, type);

  const user = userAccount.replace(/\s+/g, '');

  const connectionData = {
    appId: '201cf343b0df4a56a985141a8eb5ec04',
    channel: channelName,
  };
  const callbacks = {
    EndCall: () => {
      goBack();
    },
  };
  return (
    <>
      {type === 'Video Call' ? (
        <VideoCall connectionData={connectionData} rtcCallbacks={callbacks} />
      ) : (
        <AudioCall connectionData={{...connectionData, uid: 0}} />
      )}
    </>
  );
};

function VideoCall({connectionData, callbacks}: any) {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          height: '100%',
          width: '100%',
        }}>
        <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
      </View>
    </>
  );
}
function AudioCall({connectionData, callbacks}: any) {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          height: '100%',
          width: '100%',
        }}>
        <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
      </View>
    </>
  );
}

export default RealCall;
