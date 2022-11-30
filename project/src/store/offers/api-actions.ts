import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ApiRoute } from '../../const';

import { Offer } from '../../types/offer';

import { AppDispatch, State } from '../../types/state';

import { loadOffers, setOffersLoadingStatus } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));

    const {data} = await api.get<Offer[]>(ApiRoute.Offers);

    dispatch(loadOffers(data));
    dispatch(setOffersLoadingStatus(false));
  }
);
