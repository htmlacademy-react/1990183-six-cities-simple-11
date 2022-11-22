import { PropsWithChildren } from 'react';
import Header from '../header/header';

type LayoutProps = PropsWithChildren<{
  pageCssClass: string;
  mainCssClass: string;
  hasNavigation: boolean;
}>;

function Layout(props: LayoutProps) {
  const {children, pageCssClass, mainCssClass, hasNavigation} = props;

  return (
    <div className={`page ${pageCssClass}`}>
      <Header hasNavigation={hasNavigation} />

      <main className={`page__main ${mainCssClass}`}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
