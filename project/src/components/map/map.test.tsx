import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeLocation } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import Map from './map';

const fakeClass = 'fake-class';
const fakeLocation = createFakeLocation();
const fakeLocations = Array.from({length: 3}, createFakeLocation);

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Map
            cssClass={fakeClass}
            center={fakeLocation}
            points={fakeLocations}
            activePoint={null}
          />
        </HistoryRoute>
      </Provider>
    );

    const mapElement = screen.getByTestId('map');

    expect(mapElement).toBeInTheDocument();
    expect(mapElement).toHaveClass(fakeClass);
  });
});
