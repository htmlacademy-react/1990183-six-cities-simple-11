import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppRoute } from '../../const';

import HistoryRoute from '../history-route/history-route';
import HeaderSignIn from './header-sign-in';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: HeaderSignIn', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HeaderSignIn />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('when user click link should redirect', async () => {
    history.push(AppRoute.Root);

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<HeaderSignIn />}
            />
            <Route
              path={AppRoute.Login}
              element={<h1>Mock Login Screen</h1>}
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('link-sign-in'));

    expect(screen.getByText('Mock Login Screen')).toBeInTheDocument();
  });
});
