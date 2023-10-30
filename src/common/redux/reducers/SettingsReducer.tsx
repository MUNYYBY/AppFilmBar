import moment from 'moment';
import {
  CHANGE_LANUAGE_SUCCESS,
  SET_BATTERY,
  SET_DATE,
  SET_DATE_AND_TIME,
  SET_IS_ONLINE,
  SET_IS_WIFI,
  SET_REFRESH,
  SET_SIGNALS,
  SET_TIME,
  SET_WALLPAPER,
  THEME_SUCCESS,
} from '../../constants/ActionTypes';

const initialState = {
  data: {},
  isLoading: false,
  error: false,
  lang: false,
  isDark: false,
  isOnline: false,
  isRefresh: false,
  wallpaper: 1,
  time: String(moment()),
  date: String(moment()),
  battery: 100,
  signals: 5,
  isWifi: true,
};

const SettingsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case THEME_SUCCESS: {
      return {
        ...state,
        isDark: action.payload.isDark,
        error: false,
      };
    }

    case CHANGE_LANUAGE_SUCCESS: {
      return {
        ...state,
        lang: action.payload.lang,
        error: false,
      };
    }
    case SET_IS_ONLINE: {
      return {
        ...state,
        isOnline: action.payload.isOnline,
      };
    }
    case SET_REFRESH: {
      return {
        ...state,
        isRefresh: action.payload.isRefresh,
      };
    }
    case SET_WALLPAPER: {
      return {
        ...state,
        wallpaper: action.payload.wallpaper,
      };
    }
    case SET_TIME: {
      return {
        ...state,
        time: action.payload.time,
      };
    }
    case SET_DATE: {
      return {
        ...state,
        date: action.payload.date,
      };
    }
    case SET_DATE_AND_TIME: {
      return {
        ...state,
        time: action.payload.time,
        date: action.payload.date,
      };
    }
    case SET_BATTERY: {
      return {
        ...state,
        battery: action.payload.battery,
      };
    }
    case SET_IS_WIFI: {
      return {
        ...state,
        isWifi: action.payload.isWifi,
      };
    }
    case SET_SIGNALS: {
      return {
        ...state,
        signals: action.payload.signals,
      };
    }
    default: {
      return state;
    }
  }
};

export default SettingsReducer;
