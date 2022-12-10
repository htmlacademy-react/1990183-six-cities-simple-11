import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeReviews } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import ReviewList from './review-list';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

const fakeReviews = createFakeReviews();
const fakeCallback = jest.fn();

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <ReviewList
            reviews={fakeReviews}
            maxLength={10}
            onSort={fakeCallback}
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('list')).toBeInTheDocument();
  });
});
