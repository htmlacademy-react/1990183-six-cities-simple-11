import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';

import { CITIES, SortType } from '../../const';

import { fetchOffersAction } from './api-actions';

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

export const offers = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    sortOffers: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<Offer | null>) => {
      state.activeOffer = action.payload;
    },
    setCurrentOffersEmptyStatus: (state, action: PayloadAction<boolean>) => {
      state.areCurrentOffersEmpty = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.areOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.areOffersLoading = false;
      });
  },
});

export const {
  setActiveOffer,
  changeCity,
  sortOffers,
  setCurrentOffersEmptyStatus } = offers.actions;
