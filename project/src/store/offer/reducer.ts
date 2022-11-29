import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

import {
  addReview,
  loadOffer,
  loadOffersNearBy,
  loadReviews,
  setOfferLoadingStatus,
  setOffersNearByLoadingStatus,
  setReviewSendingErrorStatus,
  setReviewSendingStatus,
  setReviewsLoadingStatus } from './actions';

export type OfferState = {
  offer: Offer | null;
  isOfferLoading: boolean;
  offersNearBy: Offer[];
  areOffersNearBy: boolean;
  reviews: Review[];
  areReviewsLoading: boolean;
  isReviewSending: boolean;
  isReviewSendingErroneous: boolean;
};

const initialState: OfferState = {
  offer: null,
  isOfferLoading: false,
  offersNearBy: [],
  areOffersNearBy: false,
  reviews: [],
  areReviewsLoading: false,
  isReviewSending: false,
  isReviewSendingErroneous: false,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(setOffersNearByLoadingStatus, (state, action) => {
      state.areOffersNearBy = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.areReviewsLoading = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setReviewSendingStatus, (state, action) => {
      state.isReviewSending = action.payload;
    })
    .addCase(setReviewSendingErrorStatus, (state, action) => {
      state.isReviewSendingErroneous = action.payload;
    });
});
