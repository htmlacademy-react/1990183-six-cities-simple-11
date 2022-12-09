import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeGallery } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import Gallery from './gallery';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

const fakeGallery = createFakeGallery();

describe('Component: Gallery', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Gallery
            images={fakeGallery}
            alt="fake alt"
            maxLength={6}
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByTestId('gallery')).toBeInTheDocument();
  });
});
