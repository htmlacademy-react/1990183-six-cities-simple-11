import { createReducer } from '@reduxjs/toolkit';

import { AuthStatus } from '../../const';
import { setAuthStatus } from './actions';

type InitialState = {
  authStatus: AuthStatus;
};

const initialState: InitialState = {
  authStatus: AuthStatus.Unknown,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthStatus, (state, action) => {
    state.authStatus = action.payload;
  });
});
