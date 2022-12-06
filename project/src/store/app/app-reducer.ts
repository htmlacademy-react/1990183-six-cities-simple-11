import { createReducer } from '@reduxjs/toolkit';

import { setHeaderNavigationStatus } from './actions';

export type AppState = {
  hasHeaderNavigation: boolean;
};

const initialState: AppState = {
  hasHeaderNavigation: false,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setHeaderNavigationStatus, (state, action) => {
    state.hasHeaderNavigation = action.payload;
  });
});
