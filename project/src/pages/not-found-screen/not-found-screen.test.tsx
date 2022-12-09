import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import HistoryRoute from '../../components/history-route/history-route';
import NotFoundScreen from './not-found-screen';

const mockStore = configureMockStore();
const store = mockStore();

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <NotFoundScreen />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('Error 404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back to home page')).toBeInTheDocument();
  });
});
