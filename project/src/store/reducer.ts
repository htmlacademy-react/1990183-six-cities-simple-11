import { createReducer } from '@reduxjs/toolkit';

import { changeCity, updateOffers } from './actions';
import { getCities, getOffersByCity } from '../offers';

const cities = getCities();
const [defaultCity] = cities;

const initialState = {
  cities,
  currentCity: defaultCity,
  offers: getOffersByCity(defaultCity),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCity(action.payload);
    });
});
