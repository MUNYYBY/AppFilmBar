/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {LogBox, Platform, StatusBar} from 'react-native';
import AppStore from './src/common/redux/store/AppStore';
import AppNavigation from './src/common/routes/AppNavigation';
import {Immersive} from 'react-native-immersive';

function App(): JSX.Element {
  const store = AppStore({});

  const restoreImmersive = () => {
    __DEV__ && console.warn('Immersive State Changed!');
    Immersive.on();
  };
  if (Platform.OS !== 'ios') Immersive.addImmersiveListener(restoreImmersive);
  // Immersive.removeImmersiveListener(restoreImmersive);

  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setHidden(true);

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
}

export default App;
