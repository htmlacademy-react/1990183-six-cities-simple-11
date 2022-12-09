import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeReviews } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import RoomReviews from './room-reviews';
import { AuthStatus } from '../../const';

const fakeReviews = createFakeReviews();

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    authStatus: AuthStatus.NoAuth,
  }
});
const history = createMemoryHistory();

describe('Component: RoomReviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <RoomReviews
            reviews={fakeReviews}
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('reviews')).toBeInTheDocument();
  });
});
