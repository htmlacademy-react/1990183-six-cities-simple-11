import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { updateLayout } from '../../store/layout/actions';
import {
  fetchOfferAction,
  fetchOffersNearByAction,
  fetchReviewsAction } from '../../store/offer/api-actions';

import { useAppDispatch, useAppSelector } from '../../hooks';

import Loader from '../../components/loader/loader';
import RoomScreenContent from '../../components/room-screen-content/room-screen-content';

function RoomScreen() {
  const offer = useAppSelector((state) => state.offer.offer);

  const isOfferLoading = useAppSelector((state) => state.offer.isOfferLoading);
  const areOffersNearByLoading = useAppSelector((state) => state.offer.areOffersNearBy);
  const areReviewsLoading = useAppSelector((state) => state.offer.areReviewsLoading);

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

  useEffect(() => {
    dispatch(updateLayout({
      hasHeaderNavigation: true,
      pageCssClass: '',
      mainCssClass: 'page__main--property',
    }));
  }, [dispatch]);

  return (
    areDataLoading
      ? <Loader />
      : <RoomScreenContent />
  );
}

export default RoomScreen;
