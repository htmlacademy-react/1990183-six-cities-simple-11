import { State } from '../../types/state';

export const getAuthStatus = (state: State) => state.user.authStatus;
export const getUser = (state: State) => state.user.user;
