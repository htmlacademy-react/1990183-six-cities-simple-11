import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const loadOffer = createAction(
  'offer/load',
  (offer: Offer) => ({payload: offer,})
);

export const setOfferLoadingStatus = createAction(
  'offer/setLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);
