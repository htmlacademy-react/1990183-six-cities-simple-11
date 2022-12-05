import { createSelector } from '@reduxjs/toolkit';

import { SortType } from '../../const';

import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State) => state.offers.offers;
export const getOffersLoadingStatus = (state: State) => state.offers.areOffersLoading;
export const getCurrentCity = (state: State) => state.offers.currentCity;
export const getSortType = (state: State) => state.offers.sortType;
export const getActiveOffer = (state: State) => state.offers.activeOffer;
export const getCurrentOffersEmptyStatus = (state: State) => state.offers.areCurrentOffersEmpty;

export const getSortedOffers = createSelector(
  [getSortType, getOffers],
  (sortType: SortType, offers: Offer[] | null): Offer[] | null => {
    if (offers === null) {
      return null;
    }

    switch (sortType) {
      case SortType.PriceToHigh:
        return [...offers].sort((offer, nextOffer) => (offer.price - nextOffer.price));

      case SortType.PriceToLow:
        return [...offers].sort((offer, nextOffer) => (nextOffer.price - offer.price));

      case SortType.TopRated:
        return [...offers].sort((offer, nextOffer) => (nextOffer.rating - offer.rating));

      default:
        return [...offers];
    }
  }
);
