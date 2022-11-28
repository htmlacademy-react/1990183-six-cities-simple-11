import { Middleware, PayloadAction } from '@reduxjs/toolkit';

import browserHistory from '../../browser-history';
import { CombineReducer } from '..';

export const redirect: Middleware<unknown, CombineReducer> =
  (_store) =>
    (nextDispatch) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return nextDispatch(action);
      };
