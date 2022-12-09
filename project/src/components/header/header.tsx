import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import HeaderNavigation from '../header-navigation/header-navigation';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__left" data-testid="header-content">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.Root}
              data-testid="link-logo"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>

          <HeaderNavigation />

        </div>
      </div>
    </header>
  );
}

export default memo(Header);
