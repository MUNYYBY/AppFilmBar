import {
  LOAD_SESSION_SUCCESS,
  LOGOUT_SUCCESS,
  LOG_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  UPDATE_USER_DATA,
} from '../../constants/ActionTypes';
import {
  clearLocalStorageSession,
  setLocalStorageRegion,
  setLocalStorageSession,
  setLocalStorageToken,
} from '../../utils/LocalStorageUtils';

const initialState = {
  data: {},
  user: {},
  token: {
    token: '',
  },
  region: null,
};

export const getUserData = (state: any) => ({...state.user});

const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN_SUCCESS: {
      //** Sets a active session in local storage */
      setLocalStorageToken(action.payload.token);
      setLocalStorageSession(action.payload.driver_info);
      setLocalStorageRegion(action.payload.region);
      return {
        ...state,
        token: action.payload.token,
        driver_info: action.payload.user,
        region: action.payload.region,
      };
    }
    case UPDATE_USER_DATA: {
      setLocalStorageSession(action.payload.user);
      return {
        ...state,
        driver_info: action.payload.user,
      };
    }
    case LOGOUT_SUCCESS: {
      clearLocalStorageSession();
      // LogoutAPI();
      return {
        ...state,
        user: {},
        token: {
          token: '',
        },
        region: null,
      };
    }
    case LOAD_SESSION_SUCCESS: {
      return {
        ...state,
        driver_info: action.payload.user,
        token: action.payload.token,
        region: action.payload.region,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
