import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction('offers/changeCity', (cityName: string) => ({
  payload: cityName,
}));

export const updateOffers = createAction('offers/update', (cityName: string) => ({
  payload: cityName,
}));

export const loadOffers = createAction('offers/load', (offers: Offer[]) => ({
  payload: offers,
}));
