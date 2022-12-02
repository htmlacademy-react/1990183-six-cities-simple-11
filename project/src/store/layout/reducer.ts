import { createReducer } from '@reduxjs/toolkit';

import { LayoutData } from '../../types/store';

import { updateLayout } from './actions';

export type LayoutState = {
  params: LayoutData;
};

const initialState: LayoutState = {
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
