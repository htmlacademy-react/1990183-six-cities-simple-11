import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';

import { redirect } from './middlewares/redirect';

import { offers, OffersState } from './offers/offers';
import { offerReducer, OfferState } from './offer/offer-reducer';
import { user, UserState } from './user/user';
import { appReducer, AppState } from './app/app-reducer';

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
    offer: offerReducer,
    user: user.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
