import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Action, Store } from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createMemoryHistory } from 'history';

import {
  createFakeAuthorizedUser,
  createFakeOffer,
  createFakeOffersNearBy,
  createFakeReviews } from '../../utils/mocks';

import { State } from '../../types/state';
import { AuthStatus } from '../../const';
import { createAPI } from '../../services/api';

import HistoryRoute from '../../components/history-route/history-route';
import RoomScreen from './room-screen';

const fakeOffer = createFakeOffer();
const fakeReviews = createFakeReviews();
const fakeOffersNearBy = createFakeOffersNearBy();
const fakeAuthorizedUser = createFakeAuthorizedUser();

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const fakeStore = {
  app: {
    hasHeaderNavigation: true,
  },
  user: {
    authStatus: AuthStatus.Auth,
    user: fakeAuthorizedUser,
  },
  offer: {
    offer: fakeOffer,
    offersNearBy: fakeOffersNearBy,
    reviews: fakeReviews,
  },
};

const history = createMemoryHistory();

const createFakeApp = (store: Store) => (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <RoomScreen />
    </HistoryRoute>
  </Provider>
);

describe('Component: RoomScreen', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeStore);

    render(createFakeApp(store));

    expect(screen.getByTestId('room-screen')).toBeInTheDocument();
  });

  it('should render Loader if offers didn\'t load', () => {
    const store = mockStore({
      ...fakeStore,
      offer: {
        ...fakeStore.offer,
        offer: null,
      }
    });

    render(createFakeApp(store));

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
