import { createSlice } from '@reduxjs/toolkit';

import { AuthStatus } from '../../const';
import { AuthorizedUser } from '../../types/user';
import { checkAuthAction, loginAction, logoutAction } from './api-actions';

export type UserState = {
  authStatus: AuthStatus;
  user: AuthorizedUser | null;
};

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });
  }
});
