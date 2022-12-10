import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import HistoryRoute from '../../components/history-route/history-route';
import CityContentEmpty from './city-content-empty';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

const fakeCity = 'Amsterdam';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <CityContentEmpty city={fakeCity} />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('No places to stay available'))
      .toBeInTheDocument();

    expect(screen.getByText(`We could not find any property available at the moment in ${fakeCity}`))
      .toBeInTheDocument();
  });
});
