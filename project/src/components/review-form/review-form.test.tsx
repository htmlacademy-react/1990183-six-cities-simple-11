import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';

import { createFakeOffer } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import ReviewForm from './review-form';

const fakeOffer = createFakeOffer();

const mockStore = configureMockStore();
const store = mockStore({
  offer: {
    offer: fakeOffer,
    isReviewSending: false,
    isReviewSentSuccessfully: false,
  }
});
const history = createMemoryHistory();

describe('Component: ReviewForm', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <ReviewForm />
        </HistoryRoute>
      </Provider>
    );

    const fakeText = lorem.paragraph().slice(0, 299);
    const textareaElement = screen.getByTestId('review-textarea');

    expect(screen.getByLabelText('Your review')).toBeInTheDocument();
    expect(screen.getByTestId('rating-form')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(textareaElement).toBeInTheDocument();

    await userEvent.type(textareaElement, fakeText);

    expect(screen.getByDisplayValue(fakeText)).toBeInTheDocument();
  });
});
