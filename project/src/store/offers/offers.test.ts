import { datatype } from 'faker';
import { CITIES, SortType } from '../../const';

import { createFakeCity, createFakeOffer, createFakeOffers } from '../../utils/mocks';

import { fetchOffersAction } from './api-actions';
import { changeCity, offers, OffersState, setActiveOffer, setCurrentOffersEmptyStatus, sortOffers } from './offers';

const fakeOffer = createFakeOffer();
const fakeOffers = createFakeOffers();
const fakeCity = createFakeCity();
const fakeSortType = SortType.PriceToHigh;
const fakeStatus = datatype.boolean();

describe('Reducer: offers', () => {
  let state: OffersState;

  beforeEach(() => {
    state = {
      currentCity: CITIES[0],
      offers: null,
      areOffersLoading: false,
      sortType: SortType.Popular,
      activeOffer: null,
      areCurrentOffersEmpty: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offers.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: changeCity', () => {
    it('should update currentCity', () => {
      expect(offers.reducer(state, {type: changeCity, payload: fakeCity.name}))
        .toEqual({...state, currentCity: fakeCity.name});
    });
  });

  describe('Action: sortOffers', () => {
    it('should update sortType', () => {
      expect(offers.reducer(state, {type: sortOffers, payload: fakeSortType}))
        .toEqual({...state, sortType: fakeSortType});
    });
  });

  describe('Action: setActiveOffer', () => {
    it('should update activeOffer', () => {
      expect(offers.reducer(state, {type: setActiveOffer, payload: fakeOffer}))
        .toEqual({...state, activeOffer: fakeOffer});
    });
  });

  describe('Action: setCurrentOffersEmptyStatus', () => {
    it('should update areCurrentOffersEmpty', () => {
      expect(offers.reducer(state, {type: setCurrentOffersEmptyStatus, payload: fakeStatus}))
        .toEqual({...state, areCurrentOffersEmpty: fakeStatus});
    });
  });

  describe('Async action: fetchOffersAction', () => {
    it('should update areOffersLoading to "true" if action pending', () => {
      expect(offers.reducer(state, {type: fetchOffersAction.pending.type}))
        .toEqual({...state, areOffersLoading: true});
    });

    it('should update areOffersLoading to "false" and load offers if action fulfilled', () => {
      expect(offers.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: fakeOffers}))
        .toEqual({...state, offers: fakeOffers});
    });

    it('should update areOffersLoading to "false" if action rejected', () => {
      expect(offers.reducer(state, {type: fetchOffersAction.rejected.type}))
        .toEqual({...state});
    });
  });
});
