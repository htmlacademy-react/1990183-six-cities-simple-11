import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ApiRoute } from '../../const';

import { Offer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    return data;
  }
);
