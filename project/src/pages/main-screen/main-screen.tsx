import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { updateLayout } from '../../store/layout/actions';
import { fetchOffersAction } from '../../store/offers/api-actions';

import Loader from '../../components/loader/loader';
import MainScreenContent from '../../components/main-screen-content/main-screen-content';

function MainScreen() {
  const offers = useAppSelector((state) => state.offers.offers);
  const areOffersLoading = useAppSelector((state) => state.offers.areOffersLoading);

  const dispatch = useAppDispatch();

  const areDataLoading = areOffersLoading || offers === null;

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  // TODO: перенести эту логику в Layout
  useEffect(() => {
    dispatch(updateLayout({
      hasHeaderNavigation: true,
      pageCssClass: 'page--gray page--main',
      mainCssClass: 'page__main--index',
    }));
  }, [dispatch]);

  return (
    areDataLoading
      ? <Loader />
      : <MainScreenContent />
  );
}

export default MainScreen;
