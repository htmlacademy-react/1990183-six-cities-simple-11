import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';

import { redirect } from './middlewares/redirect';

import { offersReducer, OffersState } from './offers/offers-reducer';
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
    offers: offersReducer,
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
