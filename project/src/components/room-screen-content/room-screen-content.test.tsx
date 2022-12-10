import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeAuthorizedUser, createFakeOffer, createFakeOffersNearBy, createFakeReviews } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import RoomScreenContent from './room-screen-content';
import { AuthStatus } from '../../const';

const fakeOffer = createFakeOffer();
const fakeOffersNearBy = createFakeOffersNearBy();
const fakeReviews = createFakeReviews();
const fakeAuthorizedUser = createFakeAuthorizedUser();

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    authStatus: AuthStatus.NoAuth,
    user: fakeAuthorizedUser,
  },
  offer: {
    offer: fakeOffer,
    offersNearBy: fakeOffersNearBy,
    reviews: fakeReviews,
  }
});
const history = createMemoryHistory();

describe('Component: RoomScreenContent', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <RoomScreenContent />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('room-screen')).toBeInTheDocument();
    expect(screen.getByTestId('gallery')).toBeInTheDocument();
    expect(screen.getByTestId('room-inside')).toBeInTheDocument();
    expect(screen.getByTestId('reviews')).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
  });
});
