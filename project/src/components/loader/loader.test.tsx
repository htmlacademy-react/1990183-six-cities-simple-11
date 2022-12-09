import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import HistoryRoute from '../../components/history-route/history-route';
import Loader from './loader';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: Loader', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Loader />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
