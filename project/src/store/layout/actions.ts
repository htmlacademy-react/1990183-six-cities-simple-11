import { createAction } from '@reduxjs/toolkit';
import { LayoutData } from '../../types/store';

export const updateLayout = createAction(
  'layout/update',
  (data: LayoutData) => ({payload: data})
);
