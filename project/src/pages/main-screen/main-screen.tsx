import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { updateLayout } from '../../store/layout/actions';

import Loader from '../../components/loader/loader';
import MainScreenContent from '../../components/main-screen-content/main-screen-content';

function MainScreen() {
  const areOffersLoading = useAppSelector((state) => state.offers.areOffersLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateLayout({
      hasHeaderNavigation: true,
      pageCssClass: 'page--gray page--main',
      mainCssClass: 'page__main--index',
    }));
  }, [dispatch]);

  return (
    areOffersLoading
      ? <Loader />
      : <MainScreenContent />
  );
}

export default MainScreen;
