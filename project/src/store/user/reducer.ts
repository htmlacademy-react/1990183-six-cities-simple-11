import { createReducer } from '@reduxjs/toolkit';

import { AuthStatus } from '../../const';
import { AuthorizedUser } from '../../types/user';
import { loadUser, setAuthStatus } from './actions';

export type UserState = {
  authStatus: AuthStatus;
  user: AuthorizedUser | null;
};

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});
