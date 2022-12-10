import { PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { AppRoute } from '../../const';
import HistoryRoute from '../../components/history-route/history-route';
import useCurrentRoute from './use-current-router';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

describe('Hook: useCurrentRouter', () => {
  it('should return single string', () => {
    history.push(AppRoute.Login);

    const wrapper = (props: PropsWithChildren) => (
      <Provider store={store}>
        <HistoryRoute history={history}>
          {props.children}
        </HistoryRoute>
      </Provider>
    );

    const {result} = renderHook(() => useCurrentRoute(), {wrapper});
    const currentRoute = result.current;

    expect(currentRoute).toBe(AppRoute.Login);
  });
});
