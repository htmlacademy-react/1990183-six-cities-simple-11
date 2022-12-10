import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import HistoryRoute from '../../components/history-route/history-route';
import RatingForm from './rating-form';

const fakeCallback = jest.fn();

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: RatingForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <RatingForm
            rating={4}
            onRate={fakeCallback}
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('rating-form')).toBeInTheDocument();
  });
});
