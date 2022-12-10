import { State } from '../../types/state';

export const getOffer = (state: State) => state.offer.offer;
export const checkOfferLoadingStatus = (state: State) => state.offer.isOfferLoading;
export const getOffersNearBy = (state: State) => state.offer.offersNearBy;
export const checkOffersNearByLoadingStatus = (state: State) => state.offer.areOffersNearByLoading;
export const getReviews = (state: State) => state.offer.reviews;
export const checkReviewsLoadingStatus = (state: State) => state.offer.areReviewsLoading;
export const checkReviewSendingStatus = (state: State) => state.offer.isReviewSending;
export const checkReviewSentSuccessfullyStatus = (state: State) => state.offer.isReviewSentSuccessfully;
