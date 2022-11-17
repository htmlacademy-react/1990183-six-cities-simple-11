import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';
import { loadOffer } from './offer-actions';

type InitialState = {
  offer: Offer | null;
  isOfferLoading: boolean;
};

const initialState: InitialState = {
  offer: null,
  isOfferLoading: false,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffer, (state, action) => {
    state.offer = action.payload;
  });
});
