import { datatype } from 'faker';

import {
  createFakeOffer,
  createFakeOffersNearBy,
  createFakeReview,
  createFakeReviews } from '../../utils/mocks';

import { fetchOfferAction, fetchOffersNearByAction, fetchReviewsAction, sendReviewAction } from './api-actions';
import { offer, OfferState, setReviewSentSuccessfullyStatus } from './offer';

const fakeStatus = datatype.boolean();
const fakeOffer = createFakeOffer();
const fakeOffersNearBy = createFakeOffersNearBy();
const fakeReview = createFakeReview();
const fakeReviews = createFakeReviews();

describe('Reducer: offer', () => {
  let state: OfferState;

  beforeEach(() => {
    state = {
      offer: null,
      isOfferLoading: false,
      offersNearBy: [],
      areOffersNearByLoading: false,
      reviews: [],
      areReviewsLoading: false,
      isReviewSending: false,
      isReviewSentSuccessfully: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: setReviewSentSuccessfullyStatus', () => {
    it('should update isReviewSentSuccessfully', () => {
      expect(offer.reducer(state, {type: setReviewSentSuccessfullyStatus, payload: fakeStatus}))
        .toEqual({...state, isReviewSentSuccessfully: fakeStatus});
    });
  });

  describe('Async action: fetchOfferAction', () => {
    it('should update isOfferLoading to "true" if action pending', () => {
      expect(offer.reducer(state, {type: fetchOfferAction.pending}))
        .toEqual({...state, isOfferLoading: true});
    });

    it('should update isOfferLoading to "false" and load offer if action fulfilled', () => {
      expect(offer.reducer(state, {type: fetchOfferAction.fulfilled, payload: fakeOffer}))
        .toEqual({...state, offer: fakeOffer, isOfferLoading: false});
    });

    it('should update isOfferLoading to "false" if action rejected', () => {
      expect(offer.reducer(state, {type: fetchOfferAction.rejected}))
        .toEqual({...state, isOfferLoading: false});
    });
  });

  describe('Async action: fetchOffersNearByAction', () => {
    it('should update areOffersNearByLoading to "true" if action pending', () => {
      expect(offer.reducer(state, {type: fetchOffersNearByAction.pending}))
        .toEqual({...state, areOffersNearByLoading: true});
    });

    it('should update areOffersNearByLoading to "false" and load offers if action fulfilled', () => {
      expect(offer.reducer(state, {type: fetchOffersNearByAction.fulfilled, payload: fakeOffersNearBy}))
        .toEqual({...state, offersNearBy: fakeOffersNearBy, areOffersNearByLoading: false});
    });

    it('should update areOffersNearByLoading to "false" if action rejected', () => {
      expect(offer.reducer(state, {type: fetchOffersNearByAction.rejected}))
        .toEqual({...state, areOffersNearByLoading: false});
    });
  });

  describe('Async action: fetchReviewsAction', () => {
    it('should update areReviewsLoading to "true" if action pending', () => {
      expect(offer.reducer(state, {type: fetchReviewsAction.pending}))
        .toEqual({...state, areReviewsLoading: true});
    });

    it('should update areReviewsLoading to "false" and load reviews if action fulfilled', () => {
      expect(offer.reducer(state, {type: fetchReviewsAction.fulfilled, payload: fakeReviews}))
        .toEqual({...state, reviews: fakeReviews, areReviewsLoading: false});
    });

    it('should update areReviewsLoading to "false" if action rejected', () => {
      expect(offer.reducer(state, {type: fetchReviewsAction.rejected}))
        .toEqual({...state, areReviewsLoading: false});
    });
  });

  describe('Async action: sendReviewAction', () => {
    it('should update isReviewSending to "true" if action pending', () => {
      expect(offer.reducer(state, {type: sendReviewAction.pending}))
        .toEqual({...state, isReviewSending: true});
    });

    it('should update isReviewSending to "false" and update reviews if action fulfilled', () => {
      expect(offer.reducer(state, {type: sendReviewAction.fulfilled, payload: fakeReview}))
        .toEqual({
          ...state,
          reviews: [...state.reviews, fakeReview],
          isReviewSending: false,
          isReviewSentSuccessfully: true,
        });
    });

    it('should update isReviewSending to "false" if action rejected', () => {
      expect(offer.reducer(state, {type: sendReviewAction.rejected}))
        .toEqual({
          ...state,
          isReviewSending: false,
          isReviewSentSuccessfully: false,
        });
    });
  });
});
