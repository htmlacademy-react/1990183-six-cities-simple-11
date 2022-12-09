import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeAuthorizedUser } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import HeaderNavigation from './header-navigation';
import { AuthStatus } from '../../const';

const fakeUser = createFakeAuthorizedUser();

const mockStore = configureMockStore();
const store = mockStore({
  app: {
    hasHeaderNavigation: true,
  },
  user: {
    authStatus: AuthStatus.NoAuth,
    user: fakeUser,
  }
});
const history = createMemoryHistory();

describe('Component: HeaderNavigation', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HeaderNavigation />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('items')).toBeInTheDocument();
  });
});
