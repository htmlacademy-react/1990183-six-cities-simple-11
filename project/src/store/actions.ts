import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction(
  'offers/changeCity',
  (cityName: string) => ({payload: cityName})
);

export const loadOffers = createAction(
  'offers/load',
  (offers: Offer[]) => ({payload: offers})
);

export const setOffersLoadingStatus = createAction(
  'offers/setOffersLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);

export const getCities = createAction('offers/getCities');
