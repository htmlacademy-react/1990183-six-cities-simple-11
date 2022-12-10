import { Action } from 'redux';
import { Provider } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { State } from '../../types/state';
import { createAPI } from '../../services/api';
import { logoutAction } from '../../store/user/api-actions';

import HistoryRoute from '../history-route/history-route';
import HeaderSignOut from './header-sign-out';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store = mockStore({});
const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <HeaderSignOut />
    </HistoryRoute>
  </Provider>
);

describe('Component: HeaderSignIn', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByTestId('link-sign-out')).toBeInTheDocument();
  });

  it('should render dispatch action when user click link', async() => {
    render(fakeApp);

    const linkElement = screen.getByTestId('link-sign-out');

    expect(linkElement).toBeInTheDocument();
    await userEvent.click(linkElement);

    const actions = store.getActions().map(({type}) => type);

    expect(actions[0]).toEqual(logoutAction.pending.type);
  });
});
