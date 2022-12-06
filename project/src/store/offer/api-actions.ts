import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ApiRoute, AppRoute } from '../../const';

import { AppDispatch, State } from '../../types/state';
import { Offer, OfferId } from '../../types/offer';
import { Review } from '../../types/review';

import { redirectToRoute } from '../app/actions';

import {
  addReview,
  loadOffer,
  loadOffersNearBy,
  loadReviews,
  setOfferLoadingStatus,
  setOffersNearByLoadingStatus,
  setReviewSentSuccessfullyStatus,
  setReviewSendingStatus,
  setReviewsLoadingStatus } from '../offer/actions';

type ReviewData = {
  comment: string;
  rating: number;
};

type ReviewRequestData = ReviewData & {
  id: OfferId;
};

export const fetchOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferLoadingStatus(true));

      const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

      dispatch(loadOffer(data));
      dispatch(setOfferLoadingStatus(false));
    }

    catch {
      dispatch(redirectToRoute(AppRoute.ForcedNotFound));
    }
  }
);

export const fetchOffersNearByAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearBy',
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

export const sendReviewAction = createAsyncThunk<void, ReviewRequestData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/send',
  async (requestData, {dispatch, extra: api}) => {
    dispatch(setReviewSendingStatus(true));

    try {
      const {id, comment, rating} = requestData;

      const {data} = await api.post<Review[]>(`${ApiRoute.Reviews}/${id}`, {comment, rating});
      const newReview = data[data.length - 1];

      dispatch(addReview(newReview));
      dispatch(setReviewSentSuccessfullyStatus(true));
    }

    catch (error) {
      dispatch(setReviewSentSuccessfullyStatus(false));
    }

    dispatch(setReviewSendingStatus(false));
  }
);
