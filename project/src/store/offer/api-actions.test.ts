import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { generatePath } from 'react-router-dom';

import {
  createFakeOffer,
  createFakeOffersNearBy,
  createFakeReviews } from '../../utils/mocks';

import { State } from '../../types/state';
import { ApiRoute } from '../../const';
import { createAPI } from '../../services/api';
import { redirectToRoute } from '../actions';

import {
  fetchOfferAction,
  fetchOffersNearByAction,
  fetchReviewsAction,
  sendReviewAction } from './api-actions';

describe('Async actions of offer', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  describe('fetchOfferAction', () => {
    it('should load offer when server return 200', async () => {
      const fakeOffer = createFakeOffer();
      const store = mockStore();

      mockAPI
        .onGet(generatePath(ApiRoute.Offer, {id: String(fakeOffer.id)}))
        .reply(200, fakeOffer);

      await store.dispatch(fetchOfferAction(fakeOffer.id));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type
      ]);
    });

    it('should redirect to 404 when server return 404', async () => {
      const fakeId = 0;
      const store = mockStore();

      mockAPI
        .onGet(generatePath(ApiRoute.Offer, {id: String(fakeId)}))
        .reply(404, []);

      await store.dispatch(fetchOfferAction(fakeId));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        redirectToRoute.type,
        fetchOfferAction.fulfilled.type
      ]);
    });
  });

  describe('fetchOffersNearByAction', () => {
    it('should load offersNearBy when server return 200', async () => {
      const fakeId = 0;
      const fakeOffersNearBy = createFakeOffersNearBy();
      const store = mockStore();

      mockAPI
        .onGet(generatePath(ApiRoute.OffersNearBy, {id: String(fakeId)}))
        .reply(200, fakeOffersNearBy);

      await store.dispatch(fetchOffersNearByAction(fakeId));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        fetchOffersNearByAction.pending.type,
        fetchOffersNearByAction.fulfilled.type
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should load reviews when server return 200', async () => {
      const fakeId = 0;
      const fakeReviews = createFakeReviews();
      const store = mockStore();

      mockAPI
        .onGet(generatePath(ApiRoute.Reviews, {id: String(fakeId)}))
        .reply(200, fakeReviews);

      await store.dispatch(fetchReviewsAction(fakeId));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type
      ]);
    });
  });

  describe('sendReviewAction', () => {
    it('should add new review when server return 200', async () => {
      const fakeId = 1;
      const fakeReview = {
        comment: 'Comment',
        rating: 4,
      };
      const fakeReviews = createFakeReviews();
      const store = mockStore();

      mockAPI
        .onPost(
          generatePath(ApiRoute.Reviews, {id: String(fakeId)}),
          fakeReview
        )
        .reply(200, fakeReviews);

      await store.dispatch(sendReviewAction({
        ...fakeReview,
        id: fakeId,
      }));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        sendReviewAction.pending.type,
        sendReviewAction.fulfilled.type
      ]);
    });
  });
});
