import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createFakeOffer, createFakeUser } from '../../utils/mocks';

import HistoryRoute from '../../components/history-route/history-route';
import Host from './host';

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

const fakeUser = createFakeUser();
const fakeOffer = createFakeOffer();

describe('Component: Host', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Host
            user={fakeUser}
            description={fakeOffer.description}
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByAltText('Host avatar')).toHaveAttribute('src', fakeUser.avatarUrl);
    expect(screen.getByText(fakeUser.name)).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.description)).toBeInTheDocument();
  });
});
