import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createMemoryHistory } from 'history';

import { createFakeAuthorizedUser, createFakeOffers } from '../../utils/mocks';

import { State } from '../../types/state';
import { AuthStatus } from '../../const';
import { createAPI } from '../../services/api';

import HistoryRoute from '../../components/history-route/history-route';
import CityContent from './city-content';

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

const store = mockStore({
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
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <CityContent offers={fakeOffers} />
    </HistoryRoute>
  </Provider>
);

describe('Component: CityContent', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByTestId('sorting')).toBeInTheDocument();
    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
