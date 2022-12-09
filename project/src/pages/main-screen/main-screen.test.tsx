import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Action, Store } from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createMemoryHistory } from 'history';

import { createFakeAuthorizedUser, createFakeOffers } from '../../utils/mocks';

import { State } from '../../types/state';
import { AuthStatus } from '../../const';
import { createAPI } from '../../services/api';

import HistoryRoute from '../../components/history-route/history-route';
import MainScreen from './main-screen';

const fakeOffers = createFakeOffers();
const fakeCurrentCity = fakeOffers[0].city.name;
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
  offers: {
    currentCity: fakeCurrentCity,
    offers: fakeOffers,
  },
};

const history = createMemoryHistory();

const createFakeApp = (store: Store) => (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <MainScreen />
    </HistoryRoute>
  </Provider>
);

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeStore);

    render(createFakeApp(store));

    expect(screen.getByTestId('main-screen-title')).toBeInTheDocument();
  });

  it('should render Loader if offers didn\'t load', () => {
    const store = mockStore({
      ...fakeStore,
      offers: {
        ...fakeStore.offers,
        offers: null,
      }
    });

    render(createFakeApp(store));

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
