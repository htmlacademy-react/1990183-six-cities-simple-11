import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';

import { loadOffers } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>('/hotels');
    dispatch(loadOffers(data));
  }
);
