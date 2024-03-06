import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {View} from 'react-native';
import CustomStatusbar from '../../common/components/customStatusbar/CustomStatusbar';

const RealCall = () => {
  const [videoCall, setVideoCall] = useState(false);
  const connectionData = {
    appId: '840020fff84a4d8fbbcc2f8708a7598c',
    channel: 'muneeb',
    token:
      '007eJxTYEjU2nlRWifh8MUL609OOVM7bfcOW6XFeh9sGXedTOT1nHBEgcHCxMDAyCAtLc3CJNEkxSItKSk52SjNwtzAItHc1NIi+bH1i9SGQEaGGLkvzIwMEAjiszHklualpiYxMAAA7+ohrg==',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <>
      <CustomStatusbar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.05)"
      />
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
};

export default RealCall;
