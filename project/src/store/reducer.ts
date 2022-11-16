import { createReducer } from '@reduxjs/toolkit';

import { City, Offer } from '../types/offer';
import { changeCity, loadOffers, updateOffers } from './actions';
import { getCities, getOffersByCityName } from '../offers';

const cities = getCities();
const [defaultCity] = cities;

type InitialState = {
  cities: City[];
  currentCity: City;
  offers: Offer[];
}

const initialState: InitialState = {
  cities,
  currentCity: defaultCity,
  // offers: getOffersByCityName(defaultCity.name),
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const cityName = action.payload;
      state.currentCity = cities.find((city) => (city.name === cityName)) as City;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCityName(action.payload);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});
