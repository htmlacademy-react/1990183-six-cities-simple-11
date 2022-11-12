import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './actions';

const initialState = {
  currentCity: 'Paris',
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
});
