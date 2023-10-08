import {
  CHANGE_LANUAGE_SUCCESS,
  CLEAR_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  LOG_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  THEME_SUCCESS,
  GET_LOCATION,
} from '../constants/ActionTypes';

export const clearData = () => ({
  type: CLEAR_DATA_SUCCESS,
  payload: {},
});

export const fetchDataError = () => ({
  type: FETCH_DATA_ERROR,
  payload: {error: true},
});

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
  payload: {isLoading: true},
});

export const fetchDataSuccess = (res: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {res},
});

export const signupSuccess = (res: any) => ({
  type: SIGN_UP_SUCCESS,
  payload: {...res},
});

export const loginSuccess = (res: any) => ({
  type: LOG_IN_SUCCESS,
  payload: {...res},
});

export const changeThemeSuccess = (res: any) => ({
  type: THEME_SUCCESS,
  payload: {...res},
});

export const changeLanguageSuccess = (res: any) => ({
  type: CHANGE_LANUAGE_SUCCESS,
  payload: {...res},
});

export const getUserLocation = (res: any) => ({
  type: GET_LOCATION,
  payload: {...res},
});
