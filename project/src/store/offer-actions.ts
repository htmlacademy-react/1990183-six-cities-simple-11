import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const loadOffer = createAction(
  'offer/load',
  (offer: Offer) => ({payload: offer,})
);

export const setOfferLoadingStatus = createAction(
  'offer/setLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);

export const loadReviews = createAction(
  'reviews/load',
  (reviews: Review[]) => ({payload: reviews})
);

export const setReviewsLoadingStatus = createAction(
  'reviews/setLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);
