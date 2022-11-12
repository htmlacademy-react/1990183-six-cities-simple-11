import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('offers/changeCity', (value: string) => ({
  payload: value,
}));

export const updateOffers = createAction('offers/update', (value: string) => ({
  payload: value,
}));
