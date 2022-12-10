import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import HistoryRoute from '../../components/history-route/history-route';
import PremiumLabel from './premium-label';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const fakeClass = 'fake-class';

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <PremiumLabel cssClass={fakeClass} />
        </HistoryRoute>
      </Provider>
    );

    const labelElement = screen.getByTestId('label-premium');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(fakeClass);
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
