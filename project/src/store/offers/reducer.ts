import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';

import { CITIES, SortType } from '../../const';

import {
  changeCity,
  loadOffers,
  setActiveOffer,
  setOffersLoadingStatus,
  sortOffers} from './actions';


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

const getSortedOffers = (offers: Offer[], sortType: SortType) => {
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
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.sortedOffers = getSortedOffers(state.offers, state.sortType);
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

      state.sortType = action.payload;
      state.sortedOffers = getSortedOffers(state.offers, state.sortType);
    })

    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});
