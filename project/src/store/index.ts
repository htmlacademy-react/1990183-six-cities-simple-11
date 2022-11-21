import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';

import { offersReducer } from './offers/reducer';
import { offerReducer } from './offer/reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    offer: offerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
