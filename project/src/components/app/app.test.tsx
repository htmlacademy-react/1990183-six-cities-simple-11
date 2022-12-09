import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { generatePath } from 'react-router-dom';
import { Action } from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createMemoryHistory } from 'history';

import {
  createFakeAuthorizedUser,
  createFakeOffer,
  createFakeOffers,
  createFakeOffersNearBy,
  createFakeReviews } from '../../utils/mocks';

import { State } from '../../types/state';
import { AppRoute, AuthStatus } from '../../const';
import { createAPI } from '../../services/api';

import HistoryRoute from '../../components/history-route/history-route';
import App from './app';

const fakeOffers = createFakeOffers();
const fakeCurrentCity = fakeOffers[0].city.name;
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

const store = mockStore({
  app: {
    hasHeaderNavigation: true,
  },
  user: {
    authStatus: AuthStatus.NoAuth,
    user: fakeAuthorizedUser,
  },
  offers: {
    currentCity: fakeCurrentCity,
    offers: fakeOffers,
  },
  offer: {
    offer: fakeOffer,
    offersNearBy: fakeOffersNearBy,
    reviews: fakeReviews,
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <App />
    </HistoryRoute>
  </Provider>
);

describe('Application routing', () => {
  it('should render MainScreen when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByTestId('main-screen-title')).toBeInTheDocument();
  });

  it('should render RoomScreen when user navigate to "/offer/:id"', () => {
    history.push(generatePath(AppRoute.Offer, {id: String(fakeOffer.id)}));

    render(fakeApp);

    expect(screen.getByTestId('room-screen')).toBeInTheDocument();
  });

  it('should render LoginScreen when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
  });

  it('should render NotFoundScreen when user navigate to non-exist route', () => {
    history.push('/not-found');

    render(fakeApp);

    expect(screen.getByTestId('not-found-screen')).toBeInTheDocument();
  });
});
