import {
  CHANGE_LANUAGE_SUCCESS,
  CLEAR_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SCAN_ID,
  SET_DELIVERY_MODE,
  SET_DROPOFF_SCANS,
  SET_IS_ONLINE,
  SET_PICKUP_SCANS,
  SET_REFRESH,
  SIGNATURE_IMAGE,
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

    default: {
      return state;
    }
  }
};

export default SettingsReducer;
