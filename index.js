/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setPushConfig} from './src/common/utils/setPushConfig';

// Set push config
setPushConfig();
AppRegistry.registerComponent(appName, () => App);
