import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ApiRoute } from '../../const';

import { Offer, OfferId } from '../../types/offer';
import { Review } from '../../types/review';

import { AppDispatch, State } from '../../types/state';

import {
  loadOffer,
  loadOffersNearBy,
  loadReviews,
  setOfferLoadingStatus,
  setOffersNearByLoadingStatus,
  setReviewsLoadingStatus } from '../offer/actions';

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

export const fetchOffersNearByAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data, fetchOffersNearBy',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOffersNearByLoadingStatus(true));

    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);

    dispatch(loadOffersNearBy(data));
    dispatch(setOffersNearByLoadingStatus(false));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));

    const {data} = await api.get<Review[]>(`${ApiRoute.Reviews}/${id}`);

    dispatch(loadReviews(data));
    dispatch(setReviewsLoadingStatus(false));
  }
);
