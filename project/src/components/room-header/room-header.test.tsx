import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeOffer } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import RoomHeader from './room-header';

const fakeOffer = createFakeOffer();

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: RoomHeader', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <RoomHeader offer={fakeOffer} />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffer.bedrooms} Bedrooms`)).toBeInTheDocument();
    expect(screen.getByText(`Max ${fakeOffer.maxAdults} adults`)).toBeInTheDocument();
    expect(screen.getByText(`€${fakeOffer.price}`)).toBeInTheDocument();
  });
});
