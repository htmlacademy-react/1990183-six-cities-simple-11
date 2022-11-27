import { createReducer } from '@reduxjs/toolkit';

import { LayoutData } from '../../types/store';
import { updateLayout } from './actions';

type InitialState = {
  params: LayoutData;
};

const initialState: InitialState = {
  params: {
    pageCssClass: '',
    mainCssClass: '',
    hasHeaderNavigation: false,
  }
};

export const layoutReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateLayout, (state, action) => {
    state.params = action.payload;
  });
});
