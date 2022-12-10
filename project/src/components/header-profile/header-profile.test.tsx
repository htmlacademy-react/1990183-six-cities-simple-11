import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeAuthorizedUser } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import HeaderProfile from './header-profile';

const fakeUser = createFakeAuthorizedUser();

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    user: fakeUser,
  }
});
const history = createMemoryHistory();

describe('Component: HeaderProfile', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HeaderProfile />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(fakeUser.email)).toBeInTheDocument();
    expect(screen.getByAltText(fakeUser.name)).toHaveAttribute('src', fakeUser.avatarUrl);
  });
});
