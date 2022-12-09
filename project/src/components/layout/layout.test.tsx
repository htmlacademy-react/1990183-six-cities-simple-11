import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { AppRoute, AuthStatus } from '../../const';

import HistoryRoute from '../../components/history-route/history-route';
import Layout from './layout';

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    authStatus: AuthStatus.NoAuth,
  },
  app: {
    hasHeaderNavigation: false,
  },
  offers: {
    sortType: 'popular',
    activeOffer: null,
    areCurrentOffersEmpty: false,
  }
});
const history = createMemoryHistory();

describe('Component: Layout', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Root);

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Layout />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });
});
