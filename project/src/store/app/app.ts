import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  hasHeaderNavigation: boolean;
};

const initialState: AppState = {
  hasHeaderNavigation: false,
};

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHeaderNavigationStatus: (state, action: PayloadAction<boolean>) => {
      state.hasHeaderNavigation = action.payload;
    },
  },
});

export const {setHeaderNavigationStatus} = app.actions;
