import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';

import { redirect } from './middlewares/redirect';

import { offersReducer, OffersState } from './offers/reducer';
import { offerReducer, OfferState } from './offer/reducer';
import { userReducer, UserState } from './user/reducer';
import { layoutReducer, LayoutState } from './layout/reducer';

export type CombineReducer = {
  offers: OffersState;
  offer: OfferState;
  user: UserState;
  layout: LayoutState;
};

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    offer: offerReducer,
    user: userReducer,
    layout: layoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
