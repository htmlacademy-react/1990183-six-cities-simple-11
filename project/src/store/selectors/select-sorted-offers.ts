import { createSelector } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer';

import { SortType } from '../../const';

import { OffersState } from '../offers/reducer';

const selectOffers = (state: OffersState) => state.offers;
const selectSortType = (state: OffersState) => state.sortType;

export const selectSortedOffers = createSelector(
  [selectSortType, selectOffers],
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
