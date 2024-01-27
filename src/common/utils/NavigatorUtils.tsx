import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native';

//@ts-ignore
import {NavigationParams} from 'react-navigation';

import * as React from 'react';

export const navigationRef: any = React.createRef();

/**
 * navigation handler
 * @param name --screen name where to navigate
 * @param params
 */
export const navigate = (name: any, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

/**
 * empty stack with navigation
 * @param routeName
 * @param params
 */
export const reset = (routeName: string, params?: NavigationParams) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: routeName, params: params}],
  });
};

/**
 * drawer navigation toggle handler
 * @param routeName
 * @param params
 */
export const toggle = (routeName: string, params?: NavigationParams) => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

/**
 * go back to previous screen
 */
export const goBack = () => {
  navigationRef.current?.dispatch(StackActions.pop());
};

/**
 * replace current screen with new one
 * @param routeName
 */
export const replace = (routeName: string, params?: any) => {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
};

export const replace2Screens = (routeName?: string) => {
  // navigationRef.current?.replace(routeName);

  navigationRef.current?.dispatch((state: any) => {
    // Remove the last 2 routes from current list of routes
    const routes = state.routes.slice(0, -2);

    // Reset the state to the new state with updated list of routes
    return CommonActions.reset({
      ...state,
      index: routes.length - 1,
      routes,
    });
  });
};

/**
 * resest the screen as per index
 * @param routeName
 * @param index --to which index to clear stack
 */
export const resetWithIndex = (routeName: string, index?: any) => {
  navigationRef.current?.reset({
    index: index || 0,
    routes: [{name: routeName}],
  });
};
