import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

import {
  fetchOfferAction,
  fetchOffersNearByAction,
  fetchReviewsAction,
  sendReviewAction } from './api-actions';

export type OfferState = {
  offer: Offer | null;
  isOfferLoading: boolean;
  offersNearBy: Offer[];
  areOffersNearByLoading: boolean;
  reviews: Review[];
  areReviewsLoading: boolean;
  isReviewSending: boolean;
  isReviewSentSuccessfully: boolean;
};

const initialState: OfferState = {
  offer: null,
  isOfferLoading: false,
  offersNearBy: [],
  areOffersNearByLoading: false,
  reviews: [],
  areReviewsLoading: false,
  isReviewSending: false,
  isReviewSentSuccessfully: false,
};

export const offer = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    setReviewSentSuccessfullyStatus: (state, action: PayloadAction<boolean>) => {
      state.isReviewSentSuccessfully = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferLoading = false;
      })
      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.areOffersNearByLoading = true;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.offersNearBy = action.payload;
        state.areOffersNearByLoading = false;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.areOffersNearByLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.areReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.areReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.areReviewsLoading = false;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSending = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isReviewSending = false;
        state.isReviewSentSuccessfully = true;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewSending = false;
        state.isReviewSentSuccessfully = false;
      });
  },
});

export const {setReviewSentSuccessfullyStatus} = offer.actions;
