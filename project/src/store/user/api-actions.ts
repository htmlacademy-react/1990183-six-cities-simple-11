import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../../types/state';
import { AuthorizedUser } from '../../types/user';

import { ApiRoute, AuthStatus } from '../../const';
import { removeToken, saveToken } from '../../services/token';
import { loadUser, setAuthStatus } from './actions';

type AuthData = {
  email: string;
  password: string;
};

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Auth));
    }

    catch {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (authData, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<AuthorizedUser>(ApiRoute.Login, authData);

      saveToken(data.token);
      dispatch(loadUser(data));
      dispatch(setAuthStatus(AuthStatus.Auth));
    }

    catch {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    removeToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(loadUser(null));
  }
);
