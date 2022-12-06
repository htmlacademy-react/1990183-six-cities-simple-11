import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  fetchOfferAction,
  fetchOffersNearByAction,
  fetchReviewsAction } from '../../store/offer/api-actions';

import {
  getOffer,
  checkOfferLoadingStatus,
  checkOffersNearByLoadingStatus,
  checkReviewsLoadingStatus } from '../../store/offer/selectors';

import { useAppDispatch, useAppSelector } from '../../hooks';

import Loader from '../../components/loader/loader';
import RoomScreenContent from '../../components/room-screen-content/room-screen-content';

function RoomScreen() {
  const offer = useAppSelector(getOffer);

  const isOfferLoading = useAppSelector(checkOfferLoadingStatus);
  const areOffersNearByLoading = useAppSelector(checkOffersNearByLoadingStatus);
  const areReviewsLoading = useAppSelector(checkReviewsLoadingStatus);

  const areDataLoading =
    (offer === null || isOfferLoading || areOffersNearByLoading || areReviewsLoading);

  const dispatch = useAppDispatch();

  const {id} = useParams();
  const offerId = Number(id);

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
    dispatch(fetchOffersNearByAction(offerId));
    dispatch(fetchReviewsAction(offerId));
  }, [dispatch, offerId]);

  return (
    areDataLoading
      ? <Loader />
      : <RoomScreenContent />
  );
}

export default RoomScreen;
