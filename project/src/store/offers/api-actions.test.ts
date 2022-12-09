import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { createFakeOffers } from '../../utils/mocks';

import { State } from '../../types/state';
import { ApiRoute } from '../../const';
import { createAPI } from '../../services/api';
import { fetchOffersAction } from './api-actions';

describe('Async actions of offers', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  describe('fetchOffersAction', () => {
    it('should load offers when server return 200', async () => {
      const fakeOffers = createFakeOffers();
      const store = mockStore();

      mockAPI
        .onGet(ApiRoute.Offers)
        .reply(200, fakeOffers);

      await store.dispatch(fetchOffersAction());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type
      ]);
    });
  });
});
