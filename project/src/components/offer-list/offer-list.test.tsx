import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeOffers } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import OfferList from './offer-list';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

const fakeOffers = createFakeOffers();

describe('Component: OfferList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <OfferList
            offers={fakeOffers}
            cssClass='fake-class'
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
  });
});
