import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';

import { redirect } from './middlewares/redirect';

import { offersReducer, OffersState } from './offers/reducer';
import { offerReducer, OfferState } from './offer/reducer';
import { userReducer, UserState } from './user/reducer';
import { appReducer, AppState } from './app/reducer';

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
    user: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
