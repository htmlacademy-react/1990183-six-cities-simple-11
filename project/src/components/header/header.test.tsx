import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppRoute, AuthStatus } from '../../const';

import HistoryRoute from '../history-route/history-route';
import Header from './header';
import { createFakeAuthorizedUser } from '../../utils/mocks';

const fakeUser = createFakeAuthorizedUser();

const mockStore = configureMockStore();
const store = mockStore({
  app: {
    hasHeaderNavigation: true,
  },
  user: {
    authStatus: AuthStatus.NoAuth,
    user: fakeUser,
  }
});
const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Header />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('header-content')).toBeInTheDocument();
  });

  it('when user click logo should redirect', async () => {
    history.push(AppRoute.Offer);

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Offer}
              element={<Header />}
            />
            <Route
              path={AppRoute.Root}
              element={<h1>Mock Main Screen</h1>}
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('link-logo'));

    expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
  });
});
