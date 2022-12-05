import { State } from '../../types/state';

export const getOffer = (state: State) => state.offer.offer;
export const getOfferLoadingStatus = (state: State) => state.offer.isOfferLoading;
export const getOffersNearBy = (state: State) => state.offer.offersNearBy;
export const getOffersNearByLoadingStatus = (state: State) => state.offer.areOffersNearByLoading;
export const getReviews = (state: State) => state.offer.reviews;
export const getReviewsLoadingStatus = (state: State) => state.offer.areReviewsLoading;
export const getReviewSendingStatus = (state: State) => state.offer.isReviewSending;
export const getReviewSentSuccessfullyStatus = (state: State) => state.offer.isReviewSentSuccessfully;
