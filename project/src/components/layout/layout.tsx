import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import Header from '../header/header';

function Layout() {
  const layoutData = useAppSelector((state) => state.layout.params);

  const {pageCssClass, mainCssClass, hasHeaderNavigation} = layoutData;

  return (
    <div className={`page ${pageCssClass}`}>
      <Header hasNavigation={hasHeaderNavigation} />

      <main className={`page__main ${mainCssClass}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
