import { createReducer } from '@reduxjs/toolkit';

import { City } from '../types/offer';
import { changeCity, updateOffers } from './actions';
import { getCities, getOffersByCityName } from '../offers';

const cities = getCities();
const [defaultCity] = cities;

const initialState = {
  cities,
  currentCity: defaultCity,
  offers: getOffersByCityName(defaultCity.name),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const cityName = action.payload;
      state.currentCity = cities.find((city) => (city.name === cityName)) as City;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCityName(action.payload);
    });
});
