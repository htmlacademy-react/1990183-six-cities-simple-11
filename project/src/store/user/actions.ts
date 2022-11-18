import { createAction } from '@reduxjs/toolkit';

import { AuthStatus } from '../../const';
import { AuthorizedUser } from '../../types/user';

export const setAuthStatus = createAction(
  'user/setAuthStatus',
  (status: AuthStatus) => ({payload: status})
);

export const loadUser = createAction(
  'user/load',
  (user: AuthorizedUser | null) => ({payload: user})
);
