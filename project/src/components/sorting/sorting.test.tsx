import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import { State } from '../../types/state';
import { SortType } from '../../const';
import { createAPI } from '../../services/api';

import HistoryRoute from '../../components/history-route/history-route';
import Sorting from './sorting';
import { sortOffers } from '../../store/offers/offers';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);
const store = mockStore({
  offers: {
    sortType: 'popular' as SortType,
  },
});


const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <Sorting />
    </HistoryRoute>
  </Provider>
);

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByTestId('sorting')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  it('should dispatch sortOffers when user click select', async () => {
    render(fakeApp);

    const sortingItemElements = screen.getAllByTestId('sorting-item');
    await userEvent.click(sortingItemElements[0]);

    const actions = store.getActions();
    expect(actions[0].type).toBe(sortOffers.type);
  });
});
