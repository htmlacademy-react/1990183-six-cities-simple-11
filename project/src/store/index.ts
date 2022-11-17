import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { offersReducer } from './offers-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
