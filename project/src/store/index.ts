import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';

import { redirect } from './middlewares/redirect';

import { offers, OffersState } from './offers/offers';
import { offer, OfferState } from './offer/offer';
import { user, UserState } from './user/user';
import { app, AppState } from './app/app';

export type CombineReducer = {
  offers: OffersState;
  offer: OfferState;
  user: UserState;
  app: AppState;
};

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offers.reducer,
    offer: offer.reducer,
    user: user.reducer,
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
