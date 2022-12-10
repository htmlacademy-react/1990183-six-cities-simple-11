import { datatype } from 'faker';
import { app, AppState, setHeaderNavigationStatus } from './app';

const fakeStatus = datatype.boolean();

describe('Reducer: app', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      hasHeaderNavigation: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(app.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: setHeaderNavigationStatus', () => {
    it('should update hasHeaderNavigation', () => {
      expect(app.reducer(state, {type: setHeaderNavigationStatus, payload: fakeStatus}))
        .toEqual({hasHeaderNavigation: fakeStatus});
    });
  });
});
