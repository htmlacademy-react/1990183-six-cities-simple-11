import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppRoute } from '../../const';

import { setHeaderNavigationStatus } from '../../store/app/actions';

import { useAppDispatch } from '../../hooks';
import useCurrentRoute from '../../hooks/use-current-route/use-current-router';

import Header from '../header/header';

function Layout() {
  const dispatch = useAppDispatch();
  const currentRoute = useCurrentRoute();

  const [pageCssClass, setPageCssClass] = useState<string>('');
  const [mainCssClass, setMainCssClass] = useState<string>('');

  useEffect(() => {
    setPageCssClass('');
    setMainCssClass('');

    switch (currentRoute) {
      case AppRoute.Root:
        setPageCssClass('page--gray page--main');
        setMainCssClass('page__main--index');
        dispatch(setHeaderNavigationStatus(true));
        break;

      case AppRoute.OfferItem:
        setMainCssClass('page__main--property');
        dispatch(setHeaderNavigationStatus(true));
        break;

      case AppRoute.Login:
      case AppRoute.NotFound:
      case AppRoute.ForcedNotFound:
        setPageCssClass('page--gray page--login');
        setMainCssClass('page__main--login');
        dispatch(setHeaderNavigationStatus(false));
        break;
    }
  }, [currentRoute, dispatch]);

  return (
    <div className={`page ${pageCssClass}`}>
      <Header />

      <main className={`page__main ${mainCssClass}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
