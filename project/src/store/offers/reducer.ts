import { createReducer } from '@reduxjs/toolkit';

import { City, Offer } from '../../types/offer';

import { SortType } from '../../const';

import {
  changeCity,
  getCities,
  loadOffers,
  setOffersLoadingStatus,
  sortOffers} from './actions';


type InitialState = {
  cities: City[];
  currentCity: City | null;
  offers: Offer[] | null;
  sortedOffers: Offer[] | null;
  sortType: SortType;
  areOffersLoading: boolean;
}

const initialState: InitialState = {
  cities: [],
  currentCity: null,
  offers: null,
  sortedOffers: null,
  sortType: SortType.Popular,
  areOffersLoading: false,
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

    .addCase(getCities, (state) => {
      // TODO: расположить города в нужном порядке
      if (state.offers !== null && state.cities.length === 0) {
        const cityNames: string[] = [];

        state.offers.forEach((offer) => {
          if (!cityNames.includes(offer.city.name)) {
            state.cities.push(offer.city);
            cityNames.push(offer.city.name);
          }
        });

        state.currentCity = state.cities[0];
      }
    })

    .addCase(changeCity, (state, action) => {
      const cityName = action.payload;
      state.currentCity = state.cities.find((city) => (city.name === cityName)) as City;
    })

    .addCase(sortOffers, (state, action) => {
      if (state.offers === null) {
        return;
      }

      state.sortType = action.payload;
      state.sortedOffers = getSortedOffers(state.offers, state.sortType);
    });
});
