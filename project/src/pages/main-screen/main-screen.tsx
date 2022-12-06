import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { fetchOffersAction } from '../../store/offers/api-actions';
import { getOffers, checkOffersLoadingStatus } from '../../store/offers/selectors';

import Loader from '../../components/loader/loader';
import MainScreenContent from '../../components/main-screen-content/main-screen-content';

function MainScreen() {
  const offers = useAppSelector(getOffers);
  const areOffersLoading = useAppSelector(checkOffersLoadingStatus);

  const dispatch = useAppDispatch();

  const areDataLoading = areOffersLoading || offers === null;

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    areDataLoading
      ? <Loader />
      : <MainScreenContent />
  );
}

export default MainScreen;
