import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { State } from '../../types/state';
import { ApiRoute } from '../../const';
import { createAPI } from '../../services/api';
import { checkAuthAction, loginAction, logoutAction } from './api-actions';

describe('Async actions of user', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  describe('checkAuthAction', () => {
    it('should authStatus is AUTH when server return 200', async () => {
      const store = mockStore();
      mockAPI
        .onGet(ApiRoute.Login)
        .reply(200, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkAuthAction());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });

    it('should authStatus is NO_AUTH when server return 401', async () => {
      const store = mockStore();
      mockAPI
        .onGet(ApiRoute.Login)
        .reply(401, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkAuthAction());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type
      ]);
    });
  });

  describe('loginAction', () => {
    it('should authStatus is AUTH when server return 200', async () => {
      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      mockAPI
        .onPost(ApiRoute.Login)
        .reply(200, {token: 'secret'});

      expect(store.getActions()).toEqual([]);

      await store.dispatch(loginAction({
        email: 'test@test.ru',
        password: 'pass123',
      }));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type
      ]);

      expect(Storage.prototype.setItem).toBeCalledTimes(1);
      expect(Storage.prototype.setItem).toBeCalledWith('six_cities_token', 'secret');
    });

    it('should authStatus is NO_AUTH when server return 400', async () => {
      const store = mockStore();

      mockAPI
        .onPost(ApiRoute.Login)
        .reply(400, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(loginAction({
        email: 'test@test.ru',
        password: 'pass123',
      }));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type
      ]);
    });
  });

  describe('logoutAction', () => {
    it('should authStatus is NO_AUTH when server return 204', async () => {
      const store = mockStore();
      Storage.prototype.removeItem = jest.fn();

      mockAPI
        .onDelete(ApiRoute.Logout)
        .reply(204);

      await store.dispatch(logoutAction());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type
      ]);

      expect(Storage.prototype.removeItem).toBeCalledTimes(1);
      expect(Storage.prototype.removeItem).toBeCalledWith('six_cities_token');
    });
  });
});
