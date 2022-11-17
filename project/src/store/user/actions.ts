import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../const';

export const setAuthStatus = createAction(
  'user/setAuthStatus',
  (status: AuthStatus) => ({payload: status})
);
