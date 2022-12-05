import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';

import { CITIES, SortType } from '../../const';

import {
  changeCity,
  loadOffers,
  setActiveOffer,
  setCurrentOffersEmptyStatus,
  setOffersLoadingStatus,
  sortOffers } from './actions';


export type OffersState = {
  currentCity: string | null;
  offers: Offer[] | null;
  sortType: SortType;
  areOffersLoading: boolean;
  activeOffer: Offer | null;
  areCurrentOffersEmpty: boolean;
}

const initialState: OffersState = {
  currentCity: CITIES[0],
  offers: null,
  areOffersLoading: false,
  sortType: SortType.Popular,
  activeOffer: null,
  areCurrentOffersEmpty: false,
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
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
    })

    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })

    .addCase(setCurrentOffersEmptyStatus, (state, action) => {
      state.areCurrentOffersEmpty = action.payload;
    });
});
