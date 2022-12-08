import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from '@reduxjs/toolkit';

import { State } from '../../types/state';
import { AppRoute } from '../../const';
import { redirectToRoute } from '../actions';
import { redirect } from './redirect';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /404', () => {
    store.dispatch(redirectToRoute(AppRoute.ForcedNotFound));

    expect(fakeHistory.location.pathname)
      .toBe(AppRoute.ForcedNotFound);

    expect(store.getActions())
      .toEqual([redirectToRoute(AppRoute.ForcedNotFound)]);
  });
});
