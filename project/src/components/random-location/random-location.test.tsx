import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppRoute } from '../../const';

import HistoryRoute from '../history-route/history-route';
import RandomLocation from './random-location';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: RandomLocation', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <RandomLocation />
        </HistoryRoute>
      </Provider>
    );

    const cityRegex = /Paris|Cologne|Brussels|Amsterdam|Hamburg|Dusseldorf/;

    expect(screen.getByText(cityRegex)).toBeInTheDocument();
  });

  it('when user click button should redirect', async () => {
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={<RandomLocation />}
            />
            <Route
              path={AppRoute.Root}
              element={<h1>Mock Main Screen</h1>}
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('link'));

    expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
  });
});
