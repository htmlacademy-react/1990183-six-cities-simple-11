import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import HistoryRoute from '../../components/history-route/history-route';
import ReviewItem from './review-item';
import { createFakeReview } from '../../utils/mocks';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const fakeReview = createFakeReview();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <ReviewItem review={fakeReview} />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByAltText(fakeReview.user.name))
      .toHaveAttribute('src', fakeReview.user.avatarUrl);

    expect(screen.getByText(fakeReview.user.name))
      .toBeInTheDocument();

    expect(screen.getByText(fakeReview.comment))
      .toBeInTheDocument();
  });
});
