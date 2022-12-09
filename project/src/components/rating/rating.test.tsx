import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { datatype } from 'faker';

import HistoryRoute from '../../components/history-route/history-route';
import Rating from './rating';

const FakeClass = {
  Wrapper: 'fake-wrapper-class',
  Stars: 'fake-stars-class',
  Value: 'fake-value-class',
} as const;

const mockStore = configureMockStore();
const store = mockStore({});
const history = createMemoryHistory();

describe('Component: Rating', () => {
  it('should render correctly', () => {
    const fakeValue = datatype.number({min: 1, max: 5});

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Rating
            value={fakeValue}
            wrapperCssClass={FakeClass.Wrapper}
            starsCssClass={FakeClass.Stars}
            valueCssClass={FakeClass.Value}
          />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(fakeValue)).toBeInTheDocument();
    expect(screen.getByTestId('rating-wrapper')).toHaveClass(FakeClass.Wrapper);
    expect(screen.getByTestId('rating-stars')).toHaveClass(FakeClass.Stars);
    expect(screen.getByTestId('rating-value')).toHaveClass(FakeClass.Value);
  });
});
