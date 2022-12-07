import { generatePath } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ApiRoute, AppRoute } from '../../const';

import { AppDispatch, State } from '../../types/state';
import { Offer, OfferId } from '../../types/offer';
import { Review } from '../../types/review';

import { redirectToRoute } from '../app/actions';

type ReviewData = {
  comment: string;
  rating: number;
};

type ReviewRequestData = ReviewData & {
  id: OfferId;
};

export const fetchOfferAction = createAsyncThunk<Offer | null, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(generatePath(ApiRoute.Offer, {id: String(id)}));
      return data;
    }

    catch {
      dispatch(redirectToRoute(AppRoute.ForcedNotFound));
      return null;
    }
  }
);

export const fetchOffersNearByAction = createAsyncThunk<Offer[], OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearBy',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offer[]>(generatePath(ApiRoute.OffersNearBy, {id: String(id)}));
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(generatePath(ApiRoute.Reviews, {id: String(id)}));
    return data;
  }
);

export const sendReviewAction = createAsyncThunk<Review, ReviewRequestData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/send',
  async (requestData, {extra: api}) => {
    const {id, comment, rating} = requestData;

    const {data} = await api.post<Review[]>(
      generatePath(ApiRoute.Reviews, {id: String(id)}),
      {comment, rating}
    );
    const newReview = data[data.length - 1];

    return newReview;
  }
);
