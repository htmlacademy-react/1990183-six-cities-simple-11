import { AuthStatus } from '../../const';

import { createFakeAuthorizedUser } from '../../utils/mocks';

import { checkAuthAction, loginAction, logoutAction } from './api-actions';
import { user, UserState } from './user';

const fakeAuthorizedUser = createFakeAuthorizedUser();

describe('Reducer: user', () => {
  let state: UserState;

  beforeEach(() => {
    state = {
      authStatus: AuthStatus.Unknown,
      user: null,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(user.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Async action: checkAuthAction', () => {
    it('should update authStatus and user if action fulfilled', () => {
      expect(user.reducer(state, {type: checkAuthAction.fulfilled, payload: fakeAuthorizedUser}))
        .toEqual({
          authStatus: AuthStatus.Auth,
          user: fakeAuthorizedUser,
        });
    });

    it('should update authStatus if action rejected', () => {
      expect(user.reducer(state, {type: checkAuthAction.rejected}))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('Async action: loginAction', () => {
    it('should update authStatus and user if action fulfilled', () => {
      expect(user.reducer(state, {type: loginAction.fulfilled, payload: fakeAuthorizedUser}))
        .toEqual({
          authStatus: AuthStatus.Auth,
          user: fakeAuthorizedUser,
        });
    });

    it('should update authStatus if action rejected', () => {
      expect(user.reducer(state, {type: loginAction.rejected}))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('Async action: logoutAction', () => {
    it('should update authStatus if action fulfilled', () => {
      expect(user.reducer(state, {type: logoutAction.fulfilled}))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });
});
