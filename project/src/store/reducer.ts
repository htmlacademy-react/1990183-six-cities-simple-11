import { createReducer } from '@reduxjs/toolkit';

import { City, Offer } from '../types/offer';
import { changeCity, loadOffers, setOffersLoadingStatus, updateOffers } from './actions';
import { getCities, getOffersByCityName } from '../offers';

const cities = getCities();
const [defaultCity] = cities;

type InitialState = {
  cities: City[];
  currentCity: City;
  offers: Offer[];
  areOffersLoading: boolean;
}

const initialState: InitialState = {
  cities,
  currentCity: defaultCity,
  // offers: getOffersByCityName(defaultCity.name),
  offers: [],
  areOffersLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.areOffersLoading = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      const cityName = action.payload;
      state.currentCity = cities.find((city) => (city.name === cityName)) as City;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCityName(action.payload);
    });
});
