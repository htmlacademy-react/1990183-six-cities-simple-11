import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import HistoryRoute from '../history-route/history-route';
import HeaderSignOut from './header-sign-out';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: HeaderSignIn', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HeaderSignOut />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
