import { createReducer } from '@reduxjs/toolkit';

import { City, Offer } from '../../types/offer';

import {
  changeCity,
  getCities,
  loadOffers,
  setOffersLoadingStatus } from './actions';


type InitialState = {
  cities: City[];
  currentCity: City | null;
  offers: Offer[];
  areOffersLoading: boolean;
}

const initialState: InitialState = {
  cities: [],
  currentCity: null,
  offers: [],
  areOffersLoading: false,
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(setOffersLoadingStatus, (state, action) => {
      state.areOffersLoading = action.payload;
    })

    .addCase(getCities, (state) => {
      const cityNames: string[] = [];

      state.offers.forEach((offer) => {
        if (!cityNames.includes(offer.city.name)) {
          state.cities.push(offer.city);
          cityNames.push(offer.city.name);
        }
      });

      state.currentCity = state.cities[0];
    })

    .addCase(changeCity, (state, action) => {
      const cityName = action.payload;
      state.currentCity = state.cities.find((city) => (city.name === cityName)) as City;
    });
});
