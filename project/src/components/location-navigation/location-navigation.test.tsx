import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { address } from 'faker';

import HistoryRoute from '../../components/history-route/history-route';
import LocationNavigation from './location-navigation';

const fakeLocations = Array.from({length: 6}, (_, index) => `${address.cityName()}-${index}`);
const fakeCallback = jest.fn();

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: LocationNavigation', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <LocationNavigation
            locations={fakeLocations}
            currentLocation={fakeLocations[0]}
            onLocationChange={fakeCallback}
          />
        </HistoryRoute>
      </Provider>
    );

    fakeLocations.forEach((location) => {
      expect(screen.getByText(location)).toBeInTheDocument();
    });
  });
});
