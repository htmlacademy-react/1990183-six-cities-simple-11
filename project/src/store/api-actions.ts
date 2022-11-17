import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ApiRoute } from '../const';

import { Offer, OfferId } from '../types/offer';
import { AppDispatch, State } from '../types/state';

import { loadOffer, setOfferLoadingStatus } from './offer-actions';
import { getCities, loadOffers, setOffersLoadingStatus } from './offers-actions';

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
    dispatch(getCities());
    dispatch(setOffersLoadingStatus(false));
  }
);

export const fetchOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOfferLoadingStatus(true));

    const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

    dispatch(loadOffer(data));
    dispatch(setOfferLoadingStatus(false));
  }
);
