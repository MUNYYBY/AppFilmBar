/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {LogBox, StatusBar} from 'react-native';
import AppStore from './src/common/redux/store/AppStore';
import AppNavigation from './src/common/routes/AppNavigation';

function App(): JSX.Element {
  const store = AppStore({});

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
