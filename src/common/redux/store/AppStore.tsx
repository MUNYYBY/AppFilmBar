// Redux Store Configuration
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const AppStore = (initialState: Object) => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default AppStore;
