import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeGoods } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import RoomInside from './room-inside';

const fakeGoods = createFakeGoods();

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: RoomInside', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <RoomInside goods={fakeGoods} />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('What\'s inside')).toBeInTheDocument();

    fakeGoods.forEach((good) => {
      expect(screen.getByText(good)).toBeInTheDocument();
    });
  });
});
