import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { AuthStatus } from '../../const';

import HistoryRoute from '../../components/history-route/history-route';
import LoginScreen from './login-screen';

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    authStatus: AuthStatus.Unknown,
    user: null,
  }
});
const history = createMemoryHistory();

describe('Component: LoginScreen', () => {
  it('should render correctly', async () => {
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <LoginScreen />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email'), 'test@test.ru');
    await userEvent.type(screen.getByTestId('password'), 'pass13');
  });
});
