import { createAction } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';

import { SortType } from '../../const';

export const changeCity = createAction(
  'offers/changeCity',
  (city: string) => ({payload: city})
);

export const loadOffers = createAction(
  'offers/load',
  (offers: Offer[]) => ({payload: offers})
);

export const setOffersLoadingStatus = createAction(
  'offers/setOffersLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);

export const sortOffers = createAction(
  'offers/sort',
  (sortType: SortType) => ({payload: sortType})
);

export const setActiveOffer = createAction(
  'offers/setActiveOffer',
  (activeOffer: Offer | null) => ({payload: activeOffer})
);

export const setCurrentOffersEmptyStatus = createAction(
  'offers/setCurrentOffersEmptyStatus',
  (isEmpty: boolean) => ({payload: isEmpty})
);
