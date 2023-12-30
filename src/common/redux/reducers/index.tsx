import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import SettingsReducer from './SettingsReducer';
import ScheduleReducer from './SchdeuleReducer';

// Root Reducer
const rootReducer = combineReducers({
  user: AppReducer,
  settings: SettingsReducer,
  schedule: ScheduleReducer,
});

export default rootReducer;
