import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import SettingsReducer from './SettingsReducer';

// Root Reducer
const rootReducer = combineReducers({
  user: AppReducer,
  settings: SettingsReducer,
});

export default rootReducer;
