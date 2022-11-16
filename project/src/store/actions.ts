import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('offers/changeCity', (cityName: string) => ({
  payload: cityName,
}));

export const updateOffers = createAction('offers/update', (cityName: string) => ({
  payload: cityName,
}));
