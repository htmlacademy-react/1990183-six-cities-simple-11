import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../../types/state';
import { AuthorizedUser } from '../../types/user';

import { ApiRoute } from '../../const';
import { removeToken, saveToken } from '../../services/token';

type AuthData = {
  email: string;
  password: string;
};

export const checkAuthAction = createAsyncThunk<AuthorizedUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, {extra: api}) => {
    const {data} = await api.get<AuthorizedUser>(ApiRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<AuthorizedUser, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (authData, {extra: api}) => {
    const {data} = await api.post<AuthorizedUser>(ApiRoute.Login, authData);
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    removeToken();
  }
);
