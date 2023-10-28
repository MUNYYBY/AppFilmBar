import {
  CHANGE_LANUAGE_SUCCESS,
  SET_IS_ONLINE,
  SET_REFRESH,
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
    default: {
      return state;
    }
  }
};

export default SettingsReducer;
