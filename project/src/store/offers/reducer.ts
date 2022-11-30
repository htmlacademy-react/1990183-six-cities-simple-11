import { createReducer, createSelector } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';

import { CITIES, SortType } from '../../const';

import {
  changeCity,
  loadOffers,
  setActiveOffer,
  setOffersLoadingStatus,
  sortOffers } from './actions';


export type OffersState = {
  currentCity: string | null;
  offers: Offer[] | null;
  sortedOffers: Offer[] | null;
  sortType: SortType;
  areOffersLoading: boolean;
  activeOffer: Offer | null;
}

const initialState: OffersState = {
  currentCity: CITIES[0],
  offers: null,
  sortedOffers: null,
  sortType: SortType.Popular,
  areOffersLoading: false,
  activeOffer: null,
};

const getOffers = (state: OffersState) => state.offers;
const getSortType = (state: OffersState) => state.sortType;

const getSortedOffers = createSelector(
  [getSortType, getOffers],
  (sortType: SortType, offers: Offer[] | null) => {
    if (offers === null) {
      return null;
    }

    switch (sortType) {
      case SortType.PriceToHigh:
        return [...offers].sort((offer, nextOffer) => (offer.price - nextOffer.price));

      case SortType.PriceToLow:
        return [...offers].sort((offer, nextOffer) => (nextOffer.price - offer.price));

      case SortType.TopRated:
        return [...offers].sort((offer, nextOffer) => (nextOffer.rating - offer.rating));

      default:
        return [...offers];
    }
  }
);

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.sortedOffers = getSortedOffers(state);
    })

    .addCase(setOffersLoadingStatus, (state, action) => {
      state.areOffersLoading = action.payload;
    })

    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })

    .addCase(sortOffers, (state, action) => {
      if (state.offers === null) {
        return;
      }

      // TODO: переделать сортировку с помощью createSelector
      state.sortType = action.payload;
      state.sortedOffers = getSortedOffers(state);
    })

    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});
