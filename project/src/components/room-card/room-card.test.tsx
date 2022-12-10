import { Routes, Route } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeOffer } from '../../utils/mocks';

import { AppRoute } from '../../const';

import HistoryRoute from '../../components/history-route/history-route';
import RoomCard from './room-card';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

const fakeOffer = createFakeOffer();
const fakeCallback = jest.fn();

const fakeRoomCard = (
  <RoomCard
    offer={fakeOffer}
    onActiveSet={fakeCallback}
    onActiveUnset={fakeCallback}
  />
);

describe('Component: RoomCard', () => {
  it('should render correctly', () => {
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          {fakeRoomCard}
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByAltText(fakeOffer.title))
      .toHaveAttribute('src', fakeOffer.previewImage);

    expect(screen.getByText(`€${fakeOffer.price}`))
      .toBeInTheDocument();

    expect(screen.getByText(fakeOffer.title))
      .toBeInTheDocument();
  });

  it('when user click link should redirect', async () => {
    history.push(AppRoute.Root);

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={fakeRoomCard}
            />
            <Route
              path={AppRoute.Offer}
              element={<h1>Mock Offer Screen</h1>}
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('link'));

    expect(screen.getByText('Mock Offer Screen')).toBeInTheDocument();
  });
});
